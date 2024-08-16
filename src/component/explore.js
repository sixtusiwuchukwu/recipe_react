import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imageheader from "../assets/explore.png";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Explore = () => {
  const navigate = useNavigate();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  
  const fetchRecipes = async (page) => {
    try {
      const response = await axios.get(`https://recipe-server-2fbx.onrender.com/api/recipes?page=${page}&limit=${itemsPerPage}`);
      setTotalPages(response.data?.totalPages);
      setCurrentPage(response.data?.currentPage);
      setItems(response.data?.recipes);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchRecipes(pageNumber);
  };
  useEffect(() => {
    fetchRecipes(currentPage);
  }, [currentPage]);
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
      <div className="recipe-container" id='explore'>
        {loading ? <p style={{textAlign:'center',width:'100%'}}>loading...</p> : items.map((item, index) => (
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
            <button onClick={()=>navigate(`/recipe/${item._id}`)}>View {">>"}</button>
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
    @media screen and (max-width: 768px) {
      padding: 40px 50px;
    }
     @media screen and (max-width: 600px) {
      padding: 40px 20px;
    }

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

      @media screen and (max-width: 768px) {
      width: calc(35% - 20px);
    }
     @media screen and (max-width: 600px) {
      width: calc(100% - 10px);
    }
     

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
  return (
    <PaginationWrapper>
      <button
        onClick={() => onPageChange(Number(currentPage) - 1)}
        disabled={Number(currentPage) === 1}
      >
        Prev
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={Number(currentPage) === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Number(currentPage) + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </PaginationWrapper>
  );
};
