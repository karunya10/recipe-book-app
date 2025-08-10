import styles from "./Favourites.module.css";
import { useEffect } from "react";
import RecipeCard from "../../RecipeCard/RecipeCard";
function Favourite({ recipes, setTitle, handleFavourite, handleDeletedItems }) {
  useEffect(() => {
    setTitle("Favourites");
  }, []);

  const favouriteList = recipes.filter((oneRecipe) => oneRecipe.isFav);
  return (
    <>
      {!favouriteList.length && (
        <p className={styles.emptyList}> The list is Empty</p>
      )}
      <div className={styles.wholeFavouriteListContainer}>
        <div className={styles.favouritesListContainer}>
          {favouriteList.map((oneRecipe) => {
            return (
              <RecipeCard
                key={oneRecipe.id}
                recipe={oneRecipe}
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

export default Favourite;
