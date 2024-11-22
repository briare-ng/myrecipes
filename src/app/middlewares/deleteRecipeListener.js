import { createListenerMiddleware } from "@reduxjs/toolkit";
import { deleteIngredientsByRecipeName } from "../../features/ingredientsSlice";

const deleteRecipeListener = createListenerMiddleware();

deleteRecipeListener.startListening({
  type: "recipes/deleteRecipe",
  effect: (action, listenerApi) => {
    console.log("il faut aussi efffacer les ingredients du coup");
    console.log(action);

    // console.log("action", action);
    // console.log("listenerApi", listenerApi);
    // appeler dispacth pour lancer la méthode du Slice
    listenerApi.dispatch(deleteIngredientsByRecipeName(action.payload));
  },
});
export default deleteRecipeListener.middleware;
