import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./burger-ingredients.module.css";

import { IIngridients } from "../../data/typesScripts";
import { useAppSelector } from "../../services/store";
import {
  getBurgerConsructorBun,
  getBurgerConstructorList,
} from "../../services/store/burgerConstructorReducer/selectors";
import { getIngridients } from "../../services/store/burgerIngredientsReducer/selectors";
import BurgerIngredientTitle from "../burger-ingredient-title/burgerIngredientTitle";
import BurgerIngredient from "../burger-ingredient/burgerIngredient";

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("bun");
  const ingredients: IIngridients[] = useAppSelector(getIngridients);
  const BurgerConstructorList: IIngridients[] = useAppSelector(
    getBurgerConstructorList
  );
  const BurgerConstructorBun: IIngridients = useAppSelector(
    getBurgerConsructorBun
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

  const onTabClick = (tab: string) => {
    if (tab === "bun") {
      bunElement?.target.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    } else if (tab === "sauce") {
      sauceElement?.target.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    } else if (tab === "main") {
      mainElement?.target.scrollIntoView({
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

  const mainStatistics: { [index: string]: number } = React.useMemo(() => {
    if (main.length === 0) {
      return { acc: { index: 0 }, e: { index: "string" } };
    }
    let res = {};
    const items = BurgerConstructorList.filter((el) => el.type === "main");
    return items.reduce((acc: { [index: string]: number }, e: IIngridients) => {
      acc[e._id] = (acc[e._id] || 0) + 1;
      return acc;
    }, res);
  }, [main, BurgerConstructorList]);

  const sauceStatistics: { [index: string]: number } = React.useMemo(() => {
    if (sauce.length === 0) {
      return {};
    }
    let res = {};
    const items = BurgerConstructorList.filter(
      (el: IIngridients) => el.type === "sauce"
    );
    return items.reduce((acc: { [index: string]: number }, e: IIngridients) => {
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
      <div style={{ display: "flex" }} className="mb-10">
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
        {bun.map((item: IIngridients) => {
          return (
            <BurgerIngredient
              key={item._id}
              item={item}
              count={countBun[item._id] || 0}
            />
          );
        })}

        <BurgerIngredientTitle id="sauce" name="Соус" refs={refs.sauceRef} />
        {sauce.map((item: IIngridients) => {
          return (
            <BurgerIngredient
              key={item._id}
              item={item}
              count={sauceStatistics[item._id] || 0}
            />
          );
        })}

        <BurgerIngredientTitle id="main" name="Начинка" refs={refs.mainRef} />
        {main.map((item: IIngridients) => {
          return (
            <BurgerIngredient
              key={item._id}
              item={item}
              count={mainStatistics[item._id] || 0}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BurgerIngredients;
