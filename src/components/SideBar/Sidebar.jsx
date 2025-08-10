import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Add Recipe", url: "/add-recipe" },
  { name: "Favourites", url: "/favourites" },
  { name: "About", url: "/about" },
];
function Sidebar() {
  return (
    <>
      <aside id={styles.sidebar} className={styles.sideBarWholeContainer}>
        <div className={styles.sideBarContainer}>
          {navLinks.map((link, index) => {
            return (
              <div className={styles.sideBarItem} key={`${link.name}_${index}`}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.selected} ${styles.navLink}`
                      : `${styles.navLink}`
                  }
                >
                  {link.name}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className={`${styles.sideBarItem} ${styles.trashLink}`}>
          <NavLink
            to="/deletedList"
            className={({ isActive }) =>
              isActive
                ? `${styles.selected} ${styles.navLink}`
                : `${styles.navLink}`
            }
          >
            🗑️ Deleted
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
