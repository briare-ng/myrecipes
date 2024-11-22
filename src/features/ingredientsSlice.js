import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const ingredientSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    addIngredients: (state, action) => {
      console.log("addIngredients");

      //récupérer les ingredients dans la fiche recette
      const ingredients = action.payload.ingredients;
      for (let i = 1; i <= 20; i++) {
        const ingredient = ingredients[`strIngredient${i}`];
        const measure = ingredients[`strMeasure${i}`];
        if (ingredient && measure) {
          //recherche si ingredient identique existe dans le state courant
          const existingIngredient = state.value.find(
            (item) => item.ingredient === ingredient
          );
          if (existingIngredient) {
            //si l'ingredient existe déjà incrémenter les Qtys
            console.log(`l'ingredient ${ingredient} existe déjà`);
            console.log("existingIngredient.qty", existingIngredient.qty);
            const existingIngredientArray = existingIngredient.qty.split(" ");
            const measureArray = measure.split(" ");
            console.log("existingIngredientArray", existingIngredientArray);
            console.log("measureArray", measureArray);
            //sommme des 2 qty
            const newIngredientQty =
              parseInt(existingIngredientArray[0]) + parseInt(measureArray[0]);
            //remplacement de la qty par la nouvelle dans une string
            if (existingIngredientArray[1]) {
              existingIngredient.qty =
                newIngredientQty + " " + existingIngredientArray[1];
            } else {
              existingIngredient.qty = newIngredientQty;
            }
            console.log("existingIngredient.qty", existingIngredient.qty);

            //garder la date de consommation la plus proche
            if (existingIngredient.date > action.payload.date) {
              console.log(
                "la date précédente est supérieure à la nouvelle, elle est écrasée par la plus récente"
              );
              existingIngredient.date = action.payload.date;
            }
            //ajouter aux tableaux de la recette associée à cet ingredient
          } else {
            state.value.push({
              ingredient: ingredient,
              qty: measure,
              date: action.payload.date,
              idMeal: [action.payload.idMeal],
              MealName: [action.payload.strMeal],
            });
          }
        }
      }
    },
    updateIndredients: (state, action) => {
      const ingretientToUpdate = state.value.find(
        (item) => item.ingredient === action.payload.ingredient
      );
      ingretientToUpdate.qty = action.payload.qtyVal;
      ingretientToUpdate.date = action.payload.dateVal;
    },
    deleteIngredient: (state, action) => {
      state.value = state.value.filter(
        (item) => item.ingredient !== action.payload.ingredient
      );
    },
    resetIngredient: (state) => {
      state.value = [];
      console.log("ingredients remis à 0");
    },
  },
  selectors: {
    selectIngredient: (state) =>
      [...state.value].sort((a, b) => new Date(a.date) - new Date(b.date)),
  },
});

export const {
  addIngredients,
  updateIndredients,
  deleteIngredient,
  resetIngredient,
} = ingredientSlice.actions;
export const { selectIngredient } = ingredientSlice.selectors;
export default ingredientSlice.reducer;
