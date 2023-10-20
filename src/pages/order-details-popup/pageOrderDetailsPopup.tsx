import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { OrderDetailsPopup } from "../../components/order-details-popup/orderDetailsPopup";
import { IIngridientsOrder, TOrder } from "../../data/typesScripts";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { getIngridients } from "../../services/store/burgerIngredientsReducer/selectors";
import {
  WEBSOCKET_CLOSE,
  WEBSOCKET_OPEN,
} from "../../services/store/wsOrdersAll/actionsFeed";

export const PageFeedDetailsPopup = () => {
  const location = useLocation();

  const idFeed = location.pathname.substring(location.pathname.length - 24);

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.wsOrdersAllReducer);
  useEffect(() => {
    dispatch({ type: WEBSOCKET_OPEN });
    return () => {
      dispatch({ type: WEBSOCKET_CLOSE });
    };
  }, [dispatch]);
  const ingredients: IIngridientsOrder[] = useAppSelector(getIngridients);
  const getFeeds = data.orders;
  let loading = false;
  let data1: TOrder = {
    ingredients: [],
    _id: "",
    name: "",
    createdAt: "",
    updatedAt: "",
    number: 0,
  };
  if (!loading) {
    for (let i = 0; i < getFeeds.length; i++) {
      if (getFeeds[i]._id === idFeed) {
        data1 = getFeeds[i];
        loading = true;
      }
    }
  }

  if (!loading) {
    return <h1>Загрузка...</h1>;
  }
  let a: { [key: string]: number } = {};
  let imageArr: Array<IIngridientsOrder> = [];
  let generalPriceList = 0;
  data1.ingredients.forEach((element: string) => {
    a[element] = (a[element] || 0) + 1;
  });

  ingredients.forEach((item) => {
    if (data1.ingredients.includes(item._id)) {
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
    ...data1,
    generalPriceList,
    ingredientsData: imageArr,
  };
  return (
    <>
      <OrderDetailsPopup feedOrderData={orderDetailsPopup} />
    </>
  );
};
