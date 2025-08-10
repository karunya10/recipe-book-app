import { useEffect } from "react";
import RecipeList from "./RecipeList/RecipeList";

function Main({ recipes, handleFavourite, handleDeletedItems, setTitle }) {
  useEffect(() => {
    setTitle("Home Page");
  }, []);

  return (
    <RecipeList
      recipes={recipes}
      handleFavourite={handleFavourite}
      handleDeletedItems={handleDeletedItems}
    />
  );
}

export default Main;
