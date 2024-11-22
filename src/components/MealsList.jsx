import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { useGetCategoryRecipesQuery } from "../features/api/apiSlice";

function MealsList({ category }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const urlCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //     },
  //   };

  //   fetch(urlCategory, options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCategoryData(data.meals);
  //       setIsLoaded(true);
  //     })
  //     .catch((err) => {
  //       setError(err.status_message);
  //       setIsLoaded(true);
  //     });
// }, [category]);
const queryResult = useGetCategoryRecipesQuery(category);
// setCategoryData(queryResult.data);
// console.log("queryResult", queryResult.data);


  const list = categoryData.map((data, i) => {
    return <RecipeCard key={i} {...data} />;
  });

  return (
    <>
      <h1 className="text-3xl font-semibold my-3">{category} Meals</h1>
      <div className="flex flex-wrap gap-2 justify-center">{list}</div>
    </>
  );
}

export default MealsList;
