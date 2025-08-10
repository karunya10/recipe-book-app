import RecipeCard from "../RecipeCard/RecipeCard";
import Search from "../Search/Search";
import { useEffect, useState } from "react";
import styles from "./RecipeList.module.css";

function RecipeList({ recipes, handleFavourite, handleDeletedItems }) {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([...recipes]);

  useEffect(() => {
    const searchFilterList = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredList(searchFilterList);
  }, [search]);

  return (
    <>
      <div className={styles.recipeListWholeContainer}>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.recipeListContainer}>
          {(search.length === 0 ? recipes : filteredList).map((recipe) => {
            return (
              <RecipeCard
                recipe={recipe}
                key={recipe.id}
                handleFavourite={handleFavourite}
                handleDeletedItems={handleDeletedItems}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RecipeList;
