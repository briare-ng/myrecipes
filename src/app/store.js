import { configureStore } from "@reduxjs/toolkit";
import ingredientSlice from "../features/ingredientsSlice";
import recipesSlice from "../features/recipesSlice";
import deleteRecipeListener from "../app/middlewares/deleteRecipeListener";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientSlice,
    recipes: recipesSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  //ajouter les listener dans les middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(deleteRecipeListener)
      .concat(apiSlice.middleware),
});
