import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import image from "../../images/price.svg";
import { fetchOrderPost } from "../../services/actions/asyncActions";
import { closeIngredientPopup } from "../../services/actions/popupIngredientsReducer";
import {
  closeOrderPopup,
  openOrderPopup,
} from "../../services/actions/popupOrderRecucer";
import styles from "./burger-constructor.module.css";

import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  addBunIngredientConstuctor,
  addIngredientConstuctor,
} from "../../services/actions/burgerConstructorReducer";
import { clearIngredient } from "../../services/actions/ingredientDetails";
import BurgerConstructorPlaceholder from "../burger-constructor-placeholder/burgerConstructorPlaceholder";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/orderDetails";
import DragCard from "./drag-card/dragCard";

const BurgerConstructor = () => {
  const isOpenCloseOrderPopup = useSelector(
    (state) => state.popupOrderReducer.isOpenCloseOrder
  );
  const BurgerConstructorList = useSelector(
    (state) => state.burgerConstructor.ingredients
  );
  const BurgerConstructorBun = useSelector(
    (state) => state.burgerConstructor.bun
  );
  const elementDrag = useSelector((state) => state.burgerConstructor.isDrag);
  const borderColor = elementDrag ? "#4c4cff" : "#000";

  const dispatch = useDispatch();

  const handelPost = () => {
    let ingredientsIdList = BurgerConstructorList.map((item) => item._id);
    if (BurgerConstructorBun) {
      ingredientsIdList = [
        BurgerConstructorBun._id,
        ...ingredientsIdList,
        BurgerConstructorBun._id,
      ];
    } else {
      ingredientsIdList = [...ingredientsIdList];
    }
    dispatch(fetchOrderPost(ingredientsIdList));
  };

  const handlerModelOpen = () => {
    handelPost();
    dispatch(openOrderPopup());
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

  const onDropHandler = (item) => {
    if (item.type === "bun") {
      return dispatch(addBunIngredientConstuctor(item));
    }
    return dispatch(addIngredientConstuctor(item));
  };

  const [, dropRef] = useDrop({
    accept: "ingridient",
    drop(item) {
      onDropHandler(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const price = React.useMemo(() => {
    return (
      (BurgerConstructorBun ? BurgerConstructorBun.price * 2 : 0) +
      BurgerConstructorList.reduce((sum, value) => sum + value.price, 0)
    );
  }, [BurgerConstructorBun, BurgerConstructorList]);

  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.sectionDiv}`} ref={dropRef}>
        {BurgerConstructorBun ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={BurgerConstructorBun && `${BurgerConstructorBun.name} (верх)`}
            price={BurgerConstructorBun && BurgerConstructorBun.price}
            thumbnail={BurgerConstructorBun && BurgerConstructorBun.image}
          />
        ) : (
          <BurgerConstructorPlaceholder
            title="Выберите начинку"
            borderColor={borderColor}
            type="top"
          />
        )}

        <ul className={`${styles.list} custom-scroll`}>
          {BurgerConstructorList.length !== 0 ? (
            BurgerConstructorList.map((item, index) => {
              return (
                <DragCard
                  styles={styles.listItem}
                  key={item.key}
                  item={item}
                  id={item._id}
                  index={index}
                />
              );
            })
          ) : (
            <BurgerConstructorPlaceholder
              title="Выберите начинку"
              borderColor={borderColor}
              type="middle"
            />
          )}
        </ul>
        {BurgerConstructorBun ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={BurgerConstructorBun && `${BurgerConstructorBun.name} (низ)`}
            price={BurgerConstructorBun && BurgerConstructorBun.price}
            thumbnail={BurgerConstructorBun && BurgerConstructorBun.image}
          />
        ) : (
          <BurgerConstructorPlaceholder
            title="Выберите начинку"
            borderColor={borderColor}
            type="bottom"
          />
        )}
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.priceContainer}>
          <span className={`${styles.span} text text_type_digits-medium`}>
            {price}
          </span>
          <img src={image} alt="" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handlerModelOpen}
          disabled={
            BurgerConstructorList.length !== 0 && BurgerConstructorBun !== null
              ? false
              : true
          }
        >
          Оформить заказ
        </Button>
      </div>
      {isOpenCloseOrderPopup && (
        <Modal handlerModelClose={handlerModelClose}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
