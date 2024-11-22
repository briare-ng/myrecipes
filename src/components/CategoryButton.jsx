import React from "react";

function CategoryButton({
  idCategory,
  strCategory,
  strCategoryThumb,
  setCategory,
}) {

  return (
    <button
      className="flex flex-nowrap flex-col items-center rounded hover:bg-slate-50 p-1.5"
      id={idCategory}
      onClick={setCategory}
    >
      <span className="text-green-700 hover:text-green-500">{strCategory}</span>
      <img
        className="w-10 rounded-md"
        src={strCategoryThumb}
        alt={strCategoryThumb}
      />
    </button>
  );
}

export default CategoryButton;
