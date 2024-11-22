import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchIcon from "./SearchIcon";
import { useNavigate } from "react-router-dom";
import headerIMG from "../assets/img/header.jpg";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/Search/${search}`);
    console.log("searching " + search);
  };

  return (
    <>
      <img className="w-full h-40 object-cover" src={headerIMG} alt="" />
      <div className="bg-slate-300 p-2 flex justify-around shadow-lg shadow-indigo-500/40">
        <Link className="text-green-700 font-semibold hover:text-green-500" to="/">Home</Link>
        <Link className="text-green-700 font-semibold hover:text-green-500" to="/ShoppingList">Courses</Link>
        <Link className="text-green-700 font-semibold hover:text-green-500" to="/Planning">Planning</Link>
        <form className="flex" onSubmit={handleSearch}>
          <SearchBar searchValue={setSearch} />
          <button type="submit" className="relative right-6 hover:opacity-60">
            <SearchIcon />
          </button>
        </form>
      </div>
    </>
  );
}

export default Header;
