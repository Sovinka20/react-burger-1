import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";

import { useDispatch } from "react-redux";
import { clearIngredient } from "../../services/store/ingredientDetailsReducer/actions";
import { closeIngredientPopup } from "../../services/store/popupIngredientsReducer/actions";
import { closeOrderPopup } from "../../services/store/popupOrderRecucer/actions";
import BurgerIngredientTitle from "../burger-ingredient-title/burgerIngredientTitle";
import BurgerIngredient from "../burger-ingredient/burgerIngredient";
import IngredientDetails from "../ingredient-details/ingredientDetails";
import Modal from "../modal/modal";

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("bun");
  const dispatch = useDispatch();

  const isOpenClosePopupIngredients = useSelector(
    (state) => state.popupIngredientsReducer.isOpenCloseIngredient
  );
  const ingredients = useSelector(
    (state) => state.BurgerIngredientsReducer.ingredients
  );

  const BurgerConstructorList = useSelector(
    (state) => state.burgerConstructor.ingredients
  );

  const BurgerConstructorBun = useSelector(
    (state) => state.burgerConstructor.bun
  );

  const [bunsRef, inViewBuns, bunElement] = useInView({
    threshold: 0,
  });

  const [saucesRef, inViewSauces, sauceElement] = useInView({
    threshold: 0,
  });

  const [mainsRef, inViewMains, mainElement] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inViewBuns) {
      setCurrent("bun");
    } else if (inViewSauces) {
      setCurrent("sauce");
    } else if (inViewMains) {
      setCurrent("main");
    }
  }, [inViewBuns, inViewSauces, inViewMains]);

  const refs = {
    bunRef: bunsRef,
    mainRef: mainsRef,
    sauceRef: saucesRef,
  };

  function handlerModelClose(e) {
    e.stopPropagation();
    if (
      e.target.dataset.overlay === "overlay" ||
      e.currentTarget.type === "button" ||
      e.key === "Escape"
    ) {
      dispatch(closeIngredientPopup());
      dispatch(closeOrderPopup());
      dispatch(clearIngredient());
    }
  }

  const onTabClick = (tab) => {
    if (tab === "bun") {
      bunElement.target.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    } else if (tab === "sauce") {
      sauceElement.target.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    } else if (tab === "main") {
      mainElement.target.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    setCurrent(tab);
  };

  const bun = React.useMemo(
    () => ingredients.filter((item) => item.type === "bun").map((item) => item),
    [ingredients]
  );
  const main = React.useMemo(
    () =>
      ingredients.filter((item) => item.type === "main").map((item) => item),
    [ingredients]
  );
  const sauce = React.useMemo(
    () =>
      ingredients.filter((item) => item.type === "sauce").map((item) => item),
    [ingredients]
  );

  const mainStatistics = React.useMemo(() => {
    if (main.length === 0) {
      return {};
    }
    let res = {};
    const items = BurgerConstructorList.filter((el) => el.type === "main");
    return items.reduce((acc, e) => {
      acc[e._id] = (acc[e._id] || 0) + 1;
      return acc;
    }, res);
  }, [main, BurgerConstructorList]);

  const sauceStatistics = React.useMemo(() => {
    if (sauce.length === 0) {
      return {};
    }
    let res = {};
    const items = BurgerConstructorList.filter((el) => el.type === "sauce");
    return items.reduce((acc, e) => {
      acc[e._id] = (acc[e._id] || 0) + 1;
      return acc;
    }, res);
  }, [sauce, BurgerConstructorList]);

  const countBun = React.useMemo(() => {
    if (bun.length === 0) {
      return {};
    }
    const items = BurgerConstructorBun || 0;
    return { [`${items._id}`]: 2 };
  }, [bun, BurgerConstructorBun]);

  return (
    <section className={styles.section}>
      <h1 className={`mt-10 mb-10 text text_type_main-large`}>
        Соберите бургер
      </h1>
      <div className={`${styles.div} mb-10`}>
        <Tab value="bun" active={current === "bun"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={onTabClick}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={onTabClick}>
          Начинка
        </Tab>
      </div>
      <div className={`${styles.container} custom-scroll`}>
        <BurgerIngredientTitle id="bun" name="Булки" refs={refs.bunRef} />
        {bun.map((item) => {
          return (
            <BurgerIngredient
              key={item._id}
              item={item}
              count={countBun[item._id] || 0}
            />
          );
        })}

        <BurgerIngredientTitle id="sauce" name="Соус" refs={refs.sauceRef} />
        {sauce.map((item) => {
          return (
            <BurgerIngredient
              key={item._id}
              item={item}
              count={sauceStatistics[item._id] || 0}
            />
          );
        })}

        <BurgerIngredientTitle id="main" name="Начинка" refs={refs.mainRef} />
        {main.map((item) => {
          return (
            <BurgerIngredient
              key={item._id}
              item={item}
              count={mainStatistics[item._id] || 0}
            />
          );
        })}
      </div>
      {isOpenClosePopupIngredients && (
        <Modal handlerModelClose={handlerModelClose}>
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;
