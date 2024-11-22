import React, { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton";
import { useGetCategoriesQuery } from "../features/api/apiSlice";

function CategoriesCard({ category, setCategorySelected }) {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [categoriesData, setCategoriesData] = useState([]);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const urlCategories =
  //     "https://www.themealdb.com/api/json/v1/1/categories.php";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //     },
  //   };
  //   fetch(urlCategories, options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCategoriesData(data.categories);
  //       setIsLoaded(true);
  //     })
  //     .catch((err) => {
  //       setError(err.status_message);
  //       setIsLoaded(true);
  //     });
  // }, []);
  const { data, isLoading, isSuccess, isError } = useGetCategoriesQuery();

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center bg-slate-200 rounded-lg p-2 shadow-lg shadow-indigo-500/40">
        {isSuccess
          ? data.categories.map((categoryFetch, i) => (
              <CategoryButton
                key={i}
                {...categoryFetch}
                setCategory={() => {
                  setCategorySelected(categoryFetch.strCategory);
                }}
              />
            ))
          : null}
      </div>
    </>
  );
}
export default CategoriesCard;
