import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>Oh no, this route doesn't exist!</h1>
        <Link to="/">
          You can go back to the home page by clicking here, though!
        </Link>
      </main>
    </>
  );
};

export default ErrorPage;
