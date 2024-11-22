import { addIngredients } from "../../features/ingredientsSlice";
import { addRecipe } from "../../features/recipesSlice";

export const addRecipeToStore = (details) => async (dispatch) => {
  // ajout de la date aux states recettes et ingredients aux states vias les Slices redux
  dispatch(addRecipe(details));
  //ajouts des ingredients dans le state ingredients pour la shoppingList
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details.idMeal}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  //enregistrement de ingredients dans le ingredientsSlice
  const response = await fetch(url, options);
  const data = await response.json();
  // console.log(data.meals[0]);
  // console.log("details",details);
  dispatch(
    addIngredients({
      ingredients: data.meals[0],
      date: details.date,
      idMeal: details.idMeal,
      strMeal: details.strMeal,
    })
  );
};
