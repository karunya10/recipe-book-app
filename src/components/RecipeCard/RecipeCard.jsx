import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";
function RecipeCard({
  recipe,
  handleFavourite,
  handleDeletedItems,
  isTrashView = false,
  handleRestoreDeletedItem,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/recipe-detail/${recipe.id}`);
  };

  return (
    <>
      <div onClick={isTrashView === true ? null : handleNavigate}>
        <div className={styles.recipeCardContainer}>
          <div className={styles.imageWrapper}>
            {recipe.easy && <span className={styles.badge}>Easy</span>}
            <img src={recipe.image} />

            {isTrashView == false && (
              <span
                className={styles.favourites}
                onClick={(e) => handleFavourite(e, recipe.id)}
              >
                {recipe.isFav === false ? "🤍" : "❤️"}
              </span>
            )}
          </div>
          <h2>{recipe.name}</h2>
          <div className={styles.cookTimeDetails}>
            <p className={styles.globe}>
              <span className={styles.textName}>
                <img src="/images/globe.png" />
              </span>
              {recipe.category}
            </p>
            <div className={styles.cookingInfo}>
              <p className={styles.timerImage}>
                <span className={styles.textName}>
                  <img src="/images/time.png" alt="duration" />
                </span>
                {recipe.cookTime}
              </p>
              <p>
                <span className={styles.textName}>Servings:&nbsp;</span>
                {recipe.servings}
              </p>
            </div>
          </div>

          {isTrashView ? (
            <img
              className={styles.addButton}
              onClick={() => {
                handleRestoreDeletedItem(recipe);
              }}
              src="/images/plus.png"
              alt="Restore recipe"
            />
          ) : (
            <img
              className={styles.deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                handleDeletedItems(recipe.id);
              }}
              src="/images/bin.png"
              alt="Delete recipe"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
