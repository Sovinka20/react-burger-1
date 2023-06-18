import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  draggingOff,
  draggingOn,
} from "../../services/actions/burgerConstructorReducer";
import { setIngredient } from "../../services/actions/ingredientDetails";
import { openIngredientPopup } from "../../services/actions/popupIngredientsReducer";
import styles from "./burger-ingredient.module.css";

const BurgerIngredient = ({ item, count }) => {
  const dispatch = useDispatch();

  const handlerModelOpen = (item) => {
    dispatch(setIngredient(item));
    dispatch(openIngredientPopup());
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingridient",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  React.useEffect(() => {
    if (isDrag === true) {
      dispatch(draggingOn());
    } else {
      dispatch(draggingOff());
    }
  }, [isDrag, dispatch]);

  return (
    <div
      className={styles.container}
      ref={dragRef}
      onClick={() => handlerModelOpen(item)}
    >
      <img src={item.image} alt={item.name} className={styles.img} />
      <div className={styles.priceContainer}>
        <span className={`${styles.span} text text_type_digits-default`}>
          {item.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.text} text text_type_main-default`}>
        {item.name}
      </p>
      <Counter count={count} />
    </div>
  );
};

BurgerIngredient.propTypes = {
  item: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

/*BurgerIngredient.propTypes = {
  ingredients: PropTypes.arrayOf(ingridientPropType).isRequired,
  title: PropTypes.string.isRequired,
  titleId: PropTypes.string.isRequired,
  handlerModelOpen: PropTypes.func.isRequired,
};*/

export default BurgerIngredient;
