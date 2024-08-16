import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../recipe.db";
import imageheader from "../assets/explore.png";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [recipe,setRecipe] = useState({})
  const [loading,setLoading] = useState(true)
  let userId = localStorage.getItem('xx-recipe-')
  let isUser = userId === recipe.userId



const HandleDelete =async ()=>{
  let proceed = window.confirm(`You are about to delete ${recipe.title} recipe ?`)
  if(proceed){
    // query to delete the recipe
     await axios.delete(`https://recipe-server-2fbx.onrender.com/api/recipes/${recipe._id}`);
    navigate("/")
  }
}

const HandleEdit=()=>{
  navigate(`/recipe/edit`, { state: { recipeData: recipe } });
}

const getRecipe =async ()=>{
let response = await axios.get(`https://recipe-server-2fbx.onrender.com/api/recipes/${id}`)
setRecipe(response?.data);
setLoading(false)
}

useEffect(()=>{
  getRecipe().then()
},[])
  return (
    <Wrapper>
      {loading ?< p style={{textAlign:'center'}}>Loading...</p>: <>
      <div className="header">
        <img
          src={imageheader}
          style={{ width: "150px", height: "auto" }}
          alt="recipe"
        />
        <h4> {recipe?.title} Recipe </h4>
        <NavLink to={'/'} style={{color:'white',fontWeight:'bolder'}}>Home {'>'} Recipe-Details</NavLink><br/>
      <div style={isUser ? {display :'flex',justifyContent:'center',gap:10} : {display:'none'}}>
      <button className={'action-btn'} onClick={()=>HandleEdit()} >Edit </button>
      <button className={'action-btn'}  onClick={()=>HandleDelete()}>Delete</button>
      </div>
   
      </div>
      <main>
        <div className="recipe-image-container">
          <img src={recipe?.image} width={"100%"} height={"400px"} alt="recipe"/>
        </div>
        <div className="details">
                <h5>{recipe?.title} Ingredients</h5>
            <ul>
                {recipe?.ingredients?.map((item,key)=>(
                    <li key={key}>{item}</li>
                ))}
            </ul>

            <h5>Recipe Instructions:</h5>

            <p className='instructions' dangerouslySetInnerHTML={{__html:recipe.instructions}}></p>


        </div>
      </main>
      </>}
    </Wrapper>
  );
};

export default Recipe;

export const Wrapper = styled.div`
  min-height: 70vh;
  .action-btn{
    border: none;
    background-color: black;
    color: white;
    width: 20%;
    height: 40px;
    /* margin-top: 20px; */
    font-size: 16px;
    border-radius: 8px;
  }

  .header {
    text-align: center;
    background-color: #f7ca37;
    padding: 30px 0px;
    a{
          display: block;
          padding-top: 13px;
    }

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
    flex-wrap: wrap;

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

  @media screen and (max-width: 900px) {
      .header{
        h4{
          font-size: 14px;
        }
        a{
          font-size: 14px;
          display: block;
          padding-top: 13px;
        }
      }
      main{
        padding: 20px;
       .recipe-image-container{
        width: 100%;
       }
       .details{
        width: 100%;
       }
      }
    }
      @media screen and (max-width: 600px) {
      .header{
        h4{
          font-size: 14px;
        }
        a{
          font-size: 14px;
        }
      }
      .action-btn{
        width: 30%;
      }
    }
`;
