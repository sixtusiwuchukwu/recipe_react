import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../recipe.db";
import imageheader from "../assets/explore.png";

const Recipe = () => {
  const { id } = useParams();

  const recipe = db.filter((item) => item.id === Number(id))[0];

  console.log(recipe, "recipe", id);

  return (
    <Wrapper>
      <div className="header">
        <img
          src={imageheader}
          style={{ width: "150px", height: "auto" }}
          alt="recipe"
        />
        <h4> {recipe.title} Recipe </h4>
        <NavLink to={'/'} style={{color:'white',fontWeight:'bolder',paddingTop:'50px'}}>Home | Recipe-Details</NavLink>
      </div>
      <main>
        <div className="recipe-image-container">
          <img src={recipe.image} width={"100%"} height={"400px"} />
        </div>
        <div className="details">
                <h5>{recipe.title} Ingredients</h5>
            <ul>
                {recipe.ingredients.map((item,key)=>(
                    <li key={key}>{item}</li>
                ))}
            </ul>

            <h5>Recipe Instructions:</h5>

            <p className='instructions' dangerouslySetInnerHTML={{__html:recipe.instructions}}></p>


        </div>
      </main>
    </Wrapper>
  );
};

export default Recipe;

export const Wrapper = styled.div`
  min-height: 70vh;

  .header {
    text-align: center;
    background-color: #f7ca37;
    padding: 30px 0px;

    h4 {
      margin: 0;
      margin-top: -15px;
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
    }
  }

  main {
    display: flex;
    padding: 20px 100px;
    justify-content: space-between;

    .recipe-image-container {
      width: 40%;
      height: 50vh;

      img {
        max-width: 100%;
        height: auto;
        max-height: 100%;
        object-fit: cover;
      }
    }
    .details{
        width: 50%;

        ul {
            li{
                text-align: left;
            }
        }
        .instructions{
            text-align: left;
        }
    }
  }
`;
