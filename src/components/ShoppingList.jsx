import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetIngredient,
  selectIngredient,
} from "../features/ingredientsSlice";
import IngredientItem from "./IngredientItem";
import Trashbin from "./icons/Trashbin";

function ShoppingList() {
  const ingredientsSorted = useSelector(selectIngredient);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(resetIngredient());
  };

  const ingredientsList = ingredientsSorted.map((ingredient, i) => {
    return <IngredientItem key={i} {...ingredient} />;
  });

  return (
    <>
      <div className="font-bold my-4 text-2xl">ShoppingList</div>
      <div className="flex flex-col gap-3">{ingredientsList}</div>
      <button
        className=" border border-red-700 p-1 rounded-lg hover:bg-red-400 hover:text-white"
        onClick={handleClear}
      >
        vider la liste des courses
      </button>
    </>
  );
}

export default ShoppingList;
