import React from "react";

function SearchBar({ searchValue }) {
  return (
    <>
      <input
        className="border border-stone-400 rounded-2xl px-2"
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        onChange={(e) => {
          searchValue(e.target.value);
        }}
      />
    </>
  );
}

export default SearchBar;
