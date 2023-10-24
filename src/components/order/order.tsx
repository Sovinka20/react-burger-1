import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  IIngredientDetails,
  IIngridientsOrder,
  TOrder,
} from "../../data/typesScripts";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { getIngridients } from "../../services/store/burgerIngredientsReducer/selectors";
import { addFeedOrder } from "../../services/store/popupFeedOrderReducer/actions";
import styles from "./order.module.css";

type TOrderProps = {
  key: number;
  data: TOrder;
  path: string;
};

//TOrder

const Order: React.FC<TOrderProps> = ({ data, path }) => {
  const location = useLocation();
  const ingredients: IIngridientsOrder[] = useAppSelector(getIngridients);
  const dispatch = useAppDispatch();
  let a: { [key: string]: number } = {};
  let imageArr: Array<IIngridientsOrder> = [];
  let generalPriceList = 0;
  data.ingredients.forEach((element: string) => {
    a[element] = (a[element] || 0) + 1;
  });

  ingredients.forEach((item) => {
    if (data.ingredients.includes(item._id)) {
      let obj: IIngridientsOrder = {
        _id: "",
        type: "",
        image_large: "",
        image_mobile: "",
        image_mobail: "",
        image: "",
        name: "",
        calories: 0,
        proteins: 0,
        fat: 0,
        carbohydrates: 0,
        price: 0,
        numberOfComponents: 0,
      };
      obj.image = item.image_mobile;
      obj.name = item.name;
      obj.price = item.price;
      obj._id = item._id;
      for (let key in a) {
        if (key === item._id) {
          obj.numberOfComponents = a[key];
        }
      }
      imageArr.push(obj);
    }
  });
  imageArr.forEach((item) => {
    generalPriceList += item.price * item.numberOfComponents;
  });

  const orderDetailsPopup = {
    ...data,
    generalPriceList,
    ingredientsData: imageArr,
  };
  const handlerModalOpen = (item: IIngredientDetails) => {
    dispatch(addFeedOrder(item));
  };
  return (
    <Link
      to={`/${path}/${data._id}`}
      state={{ background: location, order: orderDetailsPopup }}
      className={styles.orderContainer}
    >
      <div onClick={() => handlerModalOpen(orderDetailsPopup)}>
        <h3 className={`text text_type_digits-default mb-6 ${styles.dateH3}`}>
          {`#${data.number}`}
          <span className="text text_type_main-default text_color_inactive">
            {<FormattedDate date={new Date(data.createdAt)} />}
          </span>
        </h3>
        <h2 className="text text_type_main-medium mb-6">{data.name}</h2>
        <div className={styles.imageContainer}>
          <div className={styles.imageContainer2}>
            {imageArr.slice(0, 5).map((item) => {
              return (
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  key={item._id}
                  className={styles.img}
                ></div>
              );
            })}
          </div>
          <span
            className={`text text_type_digits-default ${styles.digitsSpan}`}
          >
            {`${generalPriceList}`} <CurrencyIcon type="primary" />
          </span>
        </div>
      </div>
    </Link>
  );
};
export { Order };
