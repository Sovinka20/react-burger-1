import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../services/actions/asyncActions";
import AppHeader from "../app-header/appHeader";
import BurgerConstructor from "../burger-constructor/burgerConstructor";
import BurgerIngredients from "../burger-ingredients/burgerIngredients";
import styles from "./app.module.css";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className="App">
      <AppHeader />

      <div className={styles.wrapper}>
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      </div>
    </div>
  );
}

export default App;
