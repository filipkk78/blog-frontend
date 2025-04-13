import styles from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default App;
