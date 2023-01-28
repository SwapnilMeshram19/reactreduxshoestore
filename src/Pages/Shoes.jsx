import React from "react";
import Filter from "../Components/Filter";
import { useSelector, useDispatch } from "react-redux";
import {
  shoesDataFailure,
  shoesDataRequest,
  shoesDataSuccess,
} from "../Redux/AppReducer/action";

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

  console.log(data.isLoading);

  return (
    <div>
      <Filter />
      <div>
        {
          /* Map through the shoes list here using ShoeCard Component */

          data.isLoading ? (
            <div>Loading</div>
          ) : (
            data.shoes.map((ele) => console.log(ele))
          )
        }
      </div>
    </div>
  );
};

export default Shoes;
