import { useEffect } from "react";
import styles from "./DeletedRecipe.module.css";
import RecipeCard from "../../RecipeCard/RecipeCard";
function DeletedRecipes({ deletedList, handleRestoreDeletedItem, setTitle }) {
  useEffect(() => {
    setTitle("Deleted Recipes");
  }, []);
  return (
    <>
      {deletedList.length === 0 && (
        <p className={styles.emptyList}> The list is Empty</p>
      )}
      <div className={styles.deletedListContainer}>
        {deletedList.map((recipe) => (
          <RecipeCard
            recipe={recipe}
            isTrashView={true}
            handleRestoreDeletedItem={handleRestoreDeletedItem}
          ></RecipeCard>
        ))}
      </div>
    </>
  );
}

export default DeletedRecipes;
