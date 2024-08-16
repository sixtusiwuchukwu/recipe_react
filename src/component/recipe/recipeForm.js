import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill"; // Assuming React Quill is used as the text editor
import "react-quill/dist/quill.snow.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateRecipe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { recipeData } = location.state || {};
  const [recipeName, setRecipeName] = useState(recipeData?.title || "");
  const [ingredients, setIngredients] = useState(
    recipeData?.ingredients || [""]
  );
  const [instructions, setInstructions] = useState(
    recipeData?.instructions || ""
  );
  const [image, setImage] = useState(recipeData?.image || null);
  const [imagePreview, setImagePreview] = useState(recipeData?.image || null);
  const [loading, setLoading] = useState(false);

  const handleIngredientChange = (index, value) => {
    if (value.trim() !== "") {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = value.trim();
      setIngredients(updatedIngredients);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImagePreview(reader.result); // Preview the image using Base64 string
      };
      reader.readAsDataURL(file); // Convert image to Base64
    }
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredientField = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("new", {
      name: recipeName,
      ingredients,
      instructions,
      image,
    });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.put(
      `https://recipe-server-2fbx.onrender.com/api/recipes/${recipeData._id}`,
      {
        name: recipeName,
        ingredients,
        instructions,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setRecipeName(response?.data?.title);
    setIngredients(response.data?.ingredients);
    setInstructions(response.data?.instructions);
    setImage(response.data.image);
    setImagePreview(response.data.image);
    setLoading(false);
  };

  return (
    <FormContainer>
      <FormTitle>
        {recipeData ? `Edit ${recipeData.title}` : "Create a New Recipe"}
      </FormTitle>
      {recipeData && (
        <NavLink
          onClick={() => navigate.goBack()}
          style={{
            fontWeight: "bolder",
            display: "block",
            color: "#F8CC36",
            marginBottom: "20px",
          }}
          to={`/recipe/${recipeData._id}`}
        >
          Explore {">"} Edit
        </NavLink>
      )}
      <form onSubmit={recipeData ? handleUpdate : handleFormSubmit}>
        <InputWrapper>
          <InputField
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Recipe Name"
            required
          />
        </InputWrapper>
        <IngredientsContainer>
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <InputField
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
                required
              />
              <RemoveButton
                type="button"
                onClick={() => removeIngredientField(index)}
              >
                Remove
              </RemoveButton>
            </div>
          ))}
          <AddButton type="button" onClick={addIngredientField}>
            Add Ingredient
          </AddButton>
        </IngredientsContainer>
        <ReactQuill
          value={instructions}
          onChange={setInstructions}
          placeholder="Enter instructions..."
        />
        <ImageUploadContainer>
          <Label htmlFor="image" style={{ marginTop: "30px" }}>
            Upload Image
          </Label>
          <Input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <RecipeImage src={imagePreview} alt="Recipe Preview" />
          )}
        </ImageUploadContainer>
        <SubmitButton type="submit">
          {loading
            ? "Submitting..."
            : recipeData
            ? "Update Recipe"
            : "Submit Recipe"}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CreateRecipe;
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
`;
const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
`;

const IngredientsContainer = styled.div`
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #f8cc36;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  border: none;
  color: white;
  /* padding: 5px 6px; */
  height: 33px;
  margin-left: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f8cc36;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const RecipeImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
`;

const InputWrapper = styled.div`
  width: 84.5%;
  @media screen and (max-width: 700px) {
    width: 93%;
  }
`;
