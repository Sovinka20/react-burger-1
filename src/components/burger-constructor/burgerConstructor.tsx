import React from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import image from "../../images/price.svg";

import styles from "./burger-constructor.module.css";

import {
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";
import { IIngridients } from "../../data/typesScripts";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { fetchOrderPost } from "../../services/store/asyncActions/order";
import { userData } from "../../services/store/authReducer/selectors";
import {
  ADD_BUN_INGREDIENT_BUN,
  ADD_INGREDIENT,
} from "../../services/store/burgerConstructorReducer/actions";
import {
  elementIsDrag,
  getBurgerConsructorBun,
  getBurgerConstructorList,
} from "../../services/store/burgerConstructorReducer/selectors";
import { RESET_ORDER_DATA } from "../../services/store/orderDetailsReducer/actions";
import {
  CLOSE_ORDER_POPUP,
  OPEN_ORDER_POPUP,
} from "../../services/store/popupOrderRecucer/actions";
import { getIsOpenCloseOrderPopup } from "../../services/store/popupOrderRecucer/selectors";
import BurgerConstructorPlaceholder from "../burger-constructor-placeholder/burgerConstructorPlaceholder";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/orderDetails";
import DragCard from "./drag-card/dragCard";

const BurgerConstructor = () => {
  const navigate = useNavigate();

  const isOpenCloseOrderPopup = useAppSelector(getIsOpenCloseOrderPopup);
  const isUserAuth = useAppSelector(userData);

  const BurgerConstructorList = useAppSelector(getBurgerConstructorList);
  const BurgerConsructorBun: IIngridients = useAppSelector(
    getBurgerConsructorBun
  );
  const elementDrag: boolean = useAppSelector(elementIsDrag);

  const borderColor = elementDrag ? "#4c4cff" : "#000";

  const dispatch = useAppDispatch();

  const handelPost = () => {
    let ingredientsIdList: Array<string> = BurgerConstructorList.map(
      (item) => item._id
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
    dispatch(fetchOrderPost(ingredientsIdList));
  };

  const handlerModelOpen = () => {
    if (!isUserAuth) {
      navigate("/login");
    } else {
      handelPost();
      dispatch({
        type: RESET_ORDER_DATA,
      });
      dispatch({ type: OPEN_ORDER_POPUP });
    }
  };

  function handlerModelClose() {
    dispatch({ type: CLOSE_ORDER_POPUP });
  }

  const onDropHandler = (item: IIngridients) => {
    if (item.type === "bun") {
      return dispatch({ type: ADD_BUN_INGREDIENT_BUN, payload: item });
    }
    return dispatch({
      type: ADD_INGREDIENT,
      payload: { ...item, key: uuidv4() },
    });
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
