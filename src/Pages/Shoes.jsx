import React from "react";
import Filter from "../Components/Filter";
import { useSelector, useDispatch } from "react-redux";
import {
  shoesDataFailure,
  shoesDataRequest,
  shoesDataSuccess,
} from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";

const Shoes = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer);

  React.useEffect(() => {
    dispatch(shoesDataRequest());
    fetch("http://localhost:8080/shoes")
      .then((res) => res.json())
      .then((data) => dispatch(shoesDataSuccess(data)))
      .catch((error) => {
        console.log(error);
        dispatch(shoesDataFailure());
      });
  }, []);

  return (
    <div style={{ display: "flex", gap: "150px" }}>
      <Filter />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {
          /* Map through the shoes list here using ShoeCard Component */

          data.isLoading ? (
            <div>Loading</div>
          ) : (
            data.shoes.map((ele) => (
              <ShoeCard shoeId={ele.id} shoeData={ele} key={ele.id} />
            ))
          )
        }
      </div>
    </div>
  );
};

export default Shoes;
