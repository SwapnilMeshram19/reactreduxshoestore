import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Get the shoe card data from props

const shoeCardStyle = {
  width: "250px",
  border: "1px solid black",
  textAlign: "center",
};
const ShoeCard = ({ shoeId, shoeData }) => {
  const auth = useSelector((state) => state.AuthReducer);


  return (
    <div
      data-testid={`shoe-card-wrapper-${shoeId}`}
      style={shoeCardStyle}
    
    >
      <div>
        <img
          data-testid="shoe-card-image"
          src={shoeData.image}
          alt={shoeData.name}
          style={{ width: "250px", height: "200px" }}
        />
      </div>
      <div>
        <div data-testid="shoe-name">{shoeData.name}</div>
        <div data-testid="shoe-category">{shoeData.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
