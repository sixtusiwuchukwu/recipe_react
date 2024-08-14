import React, { useState } from "react";
import styled from "styled-components";
import imageheader from "../assets/explore.png";
import { db } from "../recipe.db";
const Explore = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const items = [...db];
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems, "currentItems");

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ExploreWrapper>
      <div className="subtitle">
        <img
          src={imageheader}
          style={{ width: "150px", height: "auto" }}
          alt="recipe"
        />
        <h4>Explore Our Recipes</h4>
      </div>
      <div className="recipe-container">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="recipe"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "8px",
              backgroundSize: "cover",
            }}
          >
            <p>{item.title}</p>
            <button>View {">>"}</button>
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </ExploreWrapper>
  );
};

const ExploreWrapper = styled.div`
  margin-top: 40px;
  .subtitle {
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

  .recipe-container {
    margin-top: 30px;
    padding: 40px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .recipe {
      position: relative;
      background-color: wheat;
      width: calc(25% - 20px); /* Adjusted to fit four in a row with spacing */
      height: 200px;
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      transition: background-size 0.3s ease-in-out, filter 0.3s ease-in-out;
      box-shadow: inset 0 0 0 100vmax rgba(0,0,0,.3);
      
     

      p {
        font-style: normal;
        font-weight: 700;
        color: white;
      }

      button {
        border: none;
        height: 30px;
        background-color: #f7ca37;
        font-style: normal;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
  justify-content: flex-end;

  button {
    margin: 0 5px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    background-color: #f4f4f4;
    cursor: pointer;
  }

  .active {
    background-color: #f8cc36;
    border-color: #f8cc36;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
export default Explore;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  console.log(currentPage, "gg");
  return (
    <PaginationWrapper>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </PaginationWrapper>
  );
};
