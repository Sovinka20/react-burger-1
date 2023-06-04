import { useEffect, useState } from "react";
import api from "../../data/api";
import AppHeader from "../app-header/appHeader";
import BurgerConstructor from "../burger-constructor/burgerConstructor";
import BurgerIngredients from "../burger-ingredients/burgerIngredients";
import Modal from "../modal/modal";
import "./App.css";

function App() {
  const [isOpenPopupIngredients, setIsOpenPopupIngredients] = useState(false);
  const [isOpenPopupOrder, setIsOpenPopupOrder] = useState(false);

  const [isOpenPopupError, setIsOpenPopupError] = useState(false);
  // Состояние оповещения об ошибке при получении данных с сервера
  const [errorMessageApi, setErrorMessageApi] = useState(
    "В процессе получения данных произошла ошибка."
  );
  // Данные с Api
  const [ingredientData, setIngredientData] = useState({});
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    api
      .getData()
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        setErrorMessageApi("В процессе получения данных произошла ошибка.");
        setIsOpenPopupError(true);
      });
  }, []);

  function handlerModelClose(e) {
    e.stopPropagation();
    if (
      e.target.dataset.overlay === "overlay" ||
      e.currentTarget.type === "button" ||
      e.key === "Escape"
    ) {
      setIsOpenPopupIngredients(false);
      setIsOpenPopupOrder(false);
      setIsOpenPopupError(false);
    }
  }

  const handlerModelOpen = (model, data) => {
    if (model === "ingridients") {
      setIngredientData(data);
      setIsOpenPopupIngredients(true);
    } else {
      setIsOpenPopupOrder(true);
    }
  };
  return (
    <div className="App">
      <header className="header">
        <AppHeader />
      </header>
      <div className="wrapper">
        <main className="main">
          <BurgerIngredients
            ingredients={apiData}
            handlerModelOpen={handlerModelOpen}
            isOpenPopupIngredients={isOpenPopupIngredients}
            handlerModelClose={handlerModelClose}
            ingredientData={ingredientData}
          />
          <BurgerConstructor
            ingredients={apiData}
            handlerModelOpen={handlerModelOpen}
            isOpenPopupOrder={isOpenPopupOrder}
            handlerModelClose={handlerModelClose}
          />
        </main>
      </div>
      {isOpenPopupError && (
        <Modal handlerModelClose={handlerModelClose}>
          <p className="messageErrorText text_type_main-large">
            {errorMessageApi}
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;
