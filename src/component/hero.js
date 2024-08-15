import React from "react";
import styled from "styled-components";
import fruitImages from '../assets/hero.png'

const Hero = () => {
  return (
    <HeroSection>
      <div className="left">
        <h1>
          Good food choices <br />
          are good <br />
          investment.
        </h1>
        <p>
          {/* A popular Nigeria resturant in your nearby places. We prepares and
          serves quality food and drinks to our customer. */}
          Explore a World of Flavor: Discover Delicious Recipes to Elevate Your Everyday Cooking and Impress Your Loved Ones
        </p>
        <a className="btn" href="#explore" >Explore</a>
      </div>
      <div className="right">
        <img alt="fruitImages" src={fruitImages} style={{width:'380px',height:'auto'}}/>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 100px;
  justify-content: space-between;
  align-content: center;
  /* align-items: center; */
  @media screen and (max-width: 768px) {
    padding: 20px 55px;
    }
     @media screen and (max-width: 600px) {
      padding: 20px 27px;
      .right{
        img{
        width:340px !important;
      }
      }
     
    }

  .left {
    width: 50%;
  
    h1 {
      /* width: 60%; */
      font-size: 60px;
      line-height: 70px;
      font-weight: 500;
      font-style: normal;

      margin: 0;
    }
    p {
      font-size: 14px;
      line-height: 18px;
      width: 75%;
      font-weight: 300;
      font-style: normal;
      color: gray !important;
    }
    p,
    h1 {
      text-align: left;
      color: #151617;
    }

    .btn {
      color: black;
      background-color: #f7ca37;
      float: left;
      border: none;
      width: 40%;
      /* height: 40px; */
      padding: 10px;
      border-radius: 20px;
      font-size: 14px;
      cursor: pointer;
      font-weight: 600;
      font-style: normal;
      text-align: center;
    }

    .btn:hover {
      background: transparent;
      border: 1px solid #f7ca37;
    }
  }

  .right {
    width: 40%;
    height: 30vh;
  }

  @media screen and (max-width: 768px) {
   
      .left{
        width: 100%;
      }

      .right{
        width: 100%;
        height: auto;
        padding-top: 70px;
      }
    }
     @media only screen and (max-width: 600px) {
      .left{
        h1{
          font-size: 20px;
          line-height: normal;
        }
      }
     }
`;
export default Hero;
// @media only screen and (max-width: 600px) {}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {}