import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import MealsList from "./MealsList";

function Home() {
  const [categorySeleted, setCategorySelected] = useState("Beef");

  return (
    <>
      <div className="p-3">
        <CategoriesCard
          category={categorySeleted}
          setCategorySelected={setCategorySelected}
        />
      </div>
      <MealsList category={categorySeleted} />
    </>
  );
}

export default Home;
