import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteIngredient, updateIndredients } from "../features/ingredientsSlice";
import Trashbin from "./icons/Trashbin";

function IngredientItem({ ingredient, qty, MealName, date }) {
  const [qtyVal, setQtyVal] = useState(qty);
  const [dateVal, setDateVal] = useState(date);

  const dispatch = useDispatch();

  const sumbmitHandle = (e) => {
    e.preventDefault();
    setQtyVal();
    setDateVal();
    console.log("submit changes : qty " + qtyVal + ", date " + dateVal);
    dispatch(updateIndredients({ ingredient, qtyVal, dateVal }));
  };

  const handledeleteIngredient = () => {
    console.log("delete " + ingredient);
    dispatch(deleteIngredient({ ingredient }));
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <img
          className="me-4"
          src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`}
          alt={ingredient}
        />
        <div>
          <form onSubmit={sumbmitHandle}>
            <div className="flex flex-col justify-center gap-1">
              <p className="text-xl font-medium">{ingredient}</p>
              {/* <p className="font-semibold">{qty}</p> */}
              <input
                className="text-center font-semibold border border-stone-300 rounded-md"
                type="text"
                name=""
                id=""
                value={qtyVal}
                onChange={(e) => setQtyVal(e.target.value)}
              />
            </div>
            <p className="text-[.8rem]">For {MealName}</p>
            <label className="text-[.7rem] italic">Planned on </label>
            <input
              className="text-center text-[.7rem] font-semibold border border-stone-300 rounded-md w-1/2"
              type="date"
              name=""
              id=""
              value={dateVal}
              onChange={(e) => setDateVal(e.target.value)}
            />
            <button type="submit"></button>
          </form>
        </div>
        <button
          className="p-2 border border-stone-300 rounded-md m-2 hover:bg-stone-100"
          type="button"
          onClick={handledeleteIngredient}
        >
          <Trashbin />
        </button>
      </div>
    </>
  );
}

export default IngredientItem;
