import styles from "./App.scss";
import { HomePage } from "./pages/home";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
