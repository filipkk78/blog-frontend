import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/">
          <h2>Coding blog</h2>
        </Link>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default App;
