import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useToggle from "../custom/useToggle";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addRecipe } from "../features/recipesSlice";
import { addIngredients } from "../features/ingredientsSlice";
import { addRecipeToStore } from "../app/middlewares/addRecipeThunk";

function RecipeCard({ strMeal, strMealThumb, idMeal }) {
  const [openModal, setOpenModal] = useToggle(false);
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const handleAdd = () => {
    setOpenModal();
    //validation de l'entrée de la date
    if (date) {
      console.log(`add for meal ${idMeal}?`);
      dispatch(
        addRecipeToStore({ strMeal: strMeal, idMeal: idMeal, date: date })
      );
    } else {
      alert("entrez une date valide");
    }
  };

  return (
    <>
      <div className="flex flex-col w-[200px] border border-slate-300 p-2 rounded-md shadow-sm shadow-green-500">
        <Link to={`/Recipe/${idMeal}`}>
          <img
            className="rounded-t-md hover:rotate-2"
            src={strMealThumb}
            alt={strMealThumb}
          />
        </Link>
        <div className="flex justify-between items-center pt-1">
          <p className="font-semibold">{strMeal}</p>
          <button
            id={idMeal}
            className="border rounded border-orange-100 hover:border-orange-200 px-2 py-1 text-orange-100 hover:text-orange-200"
            onClick={setOpenModal}
          >
            +
          </button>
        </div>
      </div>
      {openModal && (
        <Modal onClose={setOpenModal}>
          <div>
            <h2 className="bg-slate-200 rounded-sm p-1 mb-2">
              Planifier la recette{" "}
              <span className="font-semibold">{strMeal}</span> à un jour
            </h2>
            <input
              className="px-3 py-1 border border-stone-400 rounded-2xl text-center"
              type="date"
              name="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={handleAdd}
          >
            valider
          </button>
        </Modal>
      )}
    </>
  );
}
export default RecipeCard;
