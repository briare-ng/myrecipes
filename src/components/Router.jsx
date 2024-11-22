import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Recipe from "./Recipe";
import ShoppingList from "./ShoppingList";
import Planning from "./Planning";
import Home from "./Home";
import SearchResults from "./SearchResults";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Recipe/:id" element={<Recipe />}></Route>
        <Route path="/Search/:search" element={<SearchResults />}></Route>
        <Route path="/ShoppingList" element={<ShoppingList />}></Route>
        <Route path="/Planning" element={<Planning />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
