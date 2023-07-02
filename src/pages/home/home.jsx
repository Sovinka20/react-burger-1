import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../../components/burger-constructor/burgerConstructor";
import BurgerIngredients from "../../components/burger-ingredients/burgerIngredients";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    </div>
  );
};

export default Home;
