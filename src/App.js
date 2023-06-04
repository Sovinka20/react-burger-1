import { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/app-header/appHeader.jsx";
import BurgerConstructor from "./components/burger-constructor/burgerConstructor";
import BurgerIngredients from "./components/burger-ingredient/burgerIngredient";
import api from "./data/api";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    api
      .getData()
      .then((result) => {
        setApiData(result.data);
      })
      .catch((error) => {
        console.log("В процессе получения данных произошла ошибка.");
      });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <AppHeader />
      </header>
      <div className="wrapper">
        <main className="main">
          <BurgerIngredients ingredients={apiData} />
          <BurgerConstructor ingredients={apiData} />
        </main>
      </div>
    </div>
  );
}

export default App;
