import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Recipe() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data.meals[0]);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err.status_message);
        setIsLoaded(true);
      });
  }, []);

  const ingredientList = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeData[`strIngredient${i}`];
    const measure = recipeData[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredientList.push(
        <p key={i}>
          {ingredient} : {measure}
        </p>
      );
    }
  }

  return (
    <>
      <h1 className="font-semibold text-4xl my-4">{recipeData.strMeal}</h1>
      <div className="flex justify-center items-center mb-3">
        <img
          className="w-1/3 rounded-md"
          src={recipeData.strMealThumb}
          alt={recipeData.strMealThumb}
        />
        <div className="flex flex-col justify-center items-center w-1/2">
          <p className="mb-2">ingredients :</p>
          <div>{ingredientList}</div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="md:w-2/3">{recipeData.strInstructions}</p>
        <Link className="mt-3 hover:text-amber-600" to={recipeData.strYoutube}>
          Voir la vidéo
        </Link>
      </div>
    </>
  );
}

export default Recipe;
