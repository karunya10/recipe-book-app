import { Link } from "react-router-dom";
import styles from "./About.module.css";
import { useEffect } from "react";
function About({ setTitle }) {
  useEffect(() => {
    setTitle("About the Project");
  }, []);

  return (
    <>
      <div className={styles.aboutContainer}>
        <h1>About This Recipe Book</h1>
        <p className="intro">
          Welcome to my personal recipe collection! This book is a growing
          archive of recipes I’ve curated and perfected over the years—from
          traditional favorites to exciting new experiments in the kitchen.
        </p>

        <h2>Why I Created This</h2>
        <p className="purpose">
          I wanted a single place to keep all my recipes neatly organized,
          searchable, and easy to update. This project started as a simple hobby
          but has grown into a full-fledged app!
        </p>
        <h2>Credits & Links</h2>
        <p className={styles.credits}>
          Curated with ❤️ by Sakthi
          <br />
          <a
            href="https://github.com/karunya10/recipe-book-app"
            target="_blank"
            className={styles.githubLink}
          >
            GitHub Repository
          </a>
        </p>

        <Link to="/">
          <button className={styles.homeBtn}>Home</button>
        </Link>
      </div>
    </>
  );
}
export default About;
