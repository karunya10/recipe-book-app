import { useEffect } from "react";
import RecipeList from "./RecipeList/RecipeList";

function Main({
  recipes,
  setRecipes,
  handleFavourite,
  handleDeletedItems,
  setTitle,
}) {
  useEffect(() => {
    setTitle("Home Page");
  }, [setTitle]);

  return (
    <RecipeList
      recipes={recipes}
      setRecipes={setRecipes}
      handleFavourite={handleFavourite}
      handleDeletedItems={handleDeletedItems}
    />
  );
}

export default Main;
