import "./App.css";
import AppHeader from "./components/app-header/appHeader.jsx";
import BurgerConstructor from "./components/burger-constructor/burgerConstructor";
import BurgerIngredients from "./components/burger-ingredient/burgerIngredient";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <header className="header">
        <AppHeader />
      </header>
      <div className="wrapper">
        <main className="main">
          <BurgerIngredients ingredients={data} />
          <BurgerConstructor ingredients={data} />
        </main>
      </div>
    </div>
  );
}

export default App;
