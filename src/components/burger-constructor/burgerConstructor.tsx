import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import image from "../../images/price.svg";

import styles from "./burger-constructor.module.css";

import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";
import { IIngridients } from "../../data/typesScripts";
import { fetchOrderPost } from "../../services/store/asyncActions";
import { userData } from "../../services/store/authReducer/selectors";
import {
  addBunIngredientConstuctor,
  addIngredientConstuctor,
} from "../../services/store/burgerConstructorReducer/actions";
import {
  elementIsDrag,
  getBurgerConsructorBun,
  getBurgerConstructorList,
} from "../../services/store/burgerConstructorReducer/selectors";
import {
  closeOrderPopup,
  openOrderPopup,
} from "../../services/store/popupOrderRecucer/actions";
import { getIsOpenCloseOrderPopup } from "../../services/store/popupOrderRecucer/selectors";
import BurgerConstructorPlaceholder from "../burger-constructor-placeholder/burgerConstructorPlaceholder";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/orderDetails";
import DragCard from "./drag-card/dragCard";

const BurgerConstructor = () => {
  const navigate = useNavigate();

  const isOpenCloseOrderPopup = useSelector(getIsOpenCloseOrderPopup);
  const isUserAuth = useSelector(userData);
  const BurgerConstructorList = useSelector(getBurgerConstructorList);
  const BurgerConsructorBun = useSelector(getBurgerConsructorBun);
  const elementDrag = useSelector(elementIsDrag);

  const borderColor = elementDrag ? "#4c4cff" : "#000";

  const dispatch = useDispatch();

  const handelPost = () => {
    let ingredientsIdList = BurgerConstructorList.map(
      (item: IIngridients) => item._id
    );
    if (BurgerConsructorBun) {
      ingredientsIdList = [
        BurgerConsructorBun._id,
        ...ingredientsIdList,
        BurgerConsructorBun._id,
      ];
    } else {
      ingredientsIdList = [...ingredientsIdList];
    }
    dispatch(fetchOrderPost(ingredientsIdList) as unknown as any);
  };

  const handlerModelOpen = () => {
    if (!isUserAuth) {
      navigate("/login");
    } else {
      handelPost();
      dispatch(openOrderPopup());
    }
  };

  function handlerModelClose() {
    //dispatch(closeIngredientPopup());
    dispatch(closeOrderPopup());
    // dispatch(clearIngredient());
  }

  const onDropHandler = (item: IIngridients) => {
    if (item.type === "bun") {
      return dispatch(addBunIngredientConstuctor(item));
    }
    return dispatch(addIngredientConstuctor(item));
  };

  const [, dropRef] = useDrop({
    accept: "ingridient",
    drop(item: IIngridients) {
      onDropHandler(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const price = React.useMemo(() => {
    return (
      (BurgerConsructorBun ? BurgerConsructorBun.price * 2 : 0) +
      BurgerConstructorList.reduce(
        (sum: number, value: IIngridients) => sum + value.price,
        0
      )
    );
  }, [BurgerConsructorBun, BurgerConstructorList]);

  return (
    <section className={`${styles.section}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: "16px",
        }}
        ref={dropRef}
      >
        {BurgerConsructorBun ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={BurgerConsructorBun && `${BurgerConsructorBun.name} (верх)`}
            price={BurgerConsructorBun && BurgerConsructorBun.price}
            thumbnail={BurgerConsructorBun && BurgerConsructorBun.image}
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
            BurgerConstructorList.map((item: IIngridients, index: number) => {
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
        {BurgerConsructorBun ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={BurgerConsructorBun && `${BurgerConsructorBun.name} (низ)`}
            price={BurgerConsructorBun && BurgerConsructorBun.price}
            thumbnail={BurgerConsructorBun && BurgerConsructorBun.image}
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
            // isUserAuth &&
            BurgerConstructorList.length !== 0 && BurgerConsructorBun !== null
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
