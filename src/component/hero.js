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
          A popular Nigeria resturant in your nearby places. We prepares and
          serves quality food and drinks to our customer.
        </p>
        <button className="btn">Explore</button>
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
  padding: 20px 100px;
  justify-content: space-between;
  align-content: center;
  /* align-items: center; */

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
      background-color: #f7ca37;
      float: left;
      border: none;
      width: 40%;
      height: 40px;
      border-radius: 20px;
      font-size: 14px;
      cursor: pointer;
      font-weight: 100;
      font-style: normal;
    }

    .btn:hover {
      background: transparent;
      border: 2px solid #f7ca37;
    }
  }

  .right {
    width: 40%;
    height: 30vh;
  }
`;
export default Hero;
