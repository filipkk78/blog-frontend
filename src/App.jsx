import styles from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
