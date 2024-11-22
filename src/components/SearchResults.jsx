import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import Loader from "./Loader";

function SearchResults() {
  const { search } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const urlSearch = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(urlSearch, options)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.meals);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err.status_message);
        setIsLoaded(true);
      });
  }, [search]);

  let list = [];
  if (searchResults) {
    list = searchResults.map((data, i) => {
      return <RecipeCard key={i} {...data} />;
    });
  } else {
    list = <p> pas de résultats correspondant à votre recheche </p>;
  }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <>
        <h1 className="text-3xl font-semibold my-3">
          Results for your search "{search}"
        </h1>
        <div className="flex flex-wrap gap-2 justify-center">{list}</div>
      </>
    );
  }
}
export default SearchResults;
