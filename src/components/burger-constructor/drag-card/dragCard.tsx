import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { IIngridients } from "../../../data/typesScripts";
import {
  changeIngredient,
  deleteIngredient,
} from "../../../services/store/burgerConstructorReducer/actions";
import { getBurgerConstructorList } from "../../../services/store/burgerConstructorReducer/selectors";

type IDragCard = {
  item: IIngridients;
  id: string;
  index: number;
  styles: string;
};

type TUseDropProps = {
  index: number;
} & IIngridients;

const DragCard: React.FC<IDragCard> = ({ styles, item, id, index }) => {
  const cards = useSelector(getBurgerConstructorList);
  const dispatch = useDispatch();

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragCard = cards[dragIndex];
    const newCards = [...cards];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);
    dispatch(changeIngredient(newCards));
  };

  const ref = React.useRef<HTMLLIElement>(null);
  const [, refDrop] = useDrop({
    accept: "card",
    hover: (item: TUseDropProps, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, refDrag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  refDrag(refDrop(ref));

  const handleClose = (item: IIngridients) => {
    let cardsList = cards.filter((ingredient) => ingredient.key !== item.key);
    dispatch(deleteIngredient(cardsList));
  };

  return (
    <li className={styles} ref={ref} style={{ opacity: opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        extraClass="noSelect"
        handleClose={() => handleClose(item)}
      />
    </li>
  );
};

export default DragCard;
