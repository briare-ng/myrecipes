import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.value.push(action.payload);
      console.log("adding recipe to store");
    },
    deleteRecipe: (state, action) => {
      state.value = state.value.filter((item) => {
        // console.log(
        //   "les noms sont identiques : ",
        //   item.strMeal == action.payload.strMeal
        // );
        // console.log(
        //   "les dates sont identiques : ",
        //   item.date == action.payload.date
        // );
        //si return renvoie false l'item n'est pas conservé
        return (
          item.strMeal !== action.payload.strMeal || item.date !== action.payload.date
        );
      });
    },
    deleteIngredientsByRecipeName: (state, action) => {
      // return (
      // item.name !== action.payload.name || item.date !== action.payload.date
      // );
    },
    resetRecipe: (state) => {
      state.value = [];
    },
  },
});

export const {
  addRecipe,
  deleteRecipe,
  deleteIngredientsByRecipeName,
  resetRecipe,
} = recipesSlice.actions;
export default recipesSlice.reducer;
