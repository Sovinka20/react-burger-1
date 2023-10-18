import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { OrderDetailsPopup } from "../../components/order-details-popup/orderDetailsPopup";
import { IIngridientsOrder } from "../../data/typesScripts";
import { useAppDispatch } from "../../services/store";
import { getIngridients } from "../../services/store/burgerIngredientsReducer/selectors";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_SUCCESS,
} from "../../services/store/wsOrdersAll/actionsProfile";
// import { websocketConnectProfile } from "../../services/store/wsOrdersAll/actionsProfile";
import { getWsAllIngridients } from "../../services/store/wsOrdersAll/selectors";

export const PageOrderDetailsPopup = () => {
  const location = useLocation();

  const idFeed = location.pathname.substring(location.pathname.length - 24);
  // const dispatch = useDispatch();

  // const tokenLocalStorage: string = localStorage.getItem("accessToken") || "";
  // const token: string =
  //   tokenLocalStorage !== ""
  //     ? tokenLocalStorage.substring(tokenLocalStorage.length - 171)
  //     : tokenLocalStorage;
  // React.useEffect(() => {
  //   dispatch(
  //     websocketConnectProfile(
  //       `wss://norma.nomoreparties.space/orders?token=${token}`
  //     )
  //   );
  //   return () => {
  //     dispatch({ type: WEBSOCKET_CLOSE });
  //   };
  // }, [dispatch]);

  const dispatch = useAppDispatch();
  // const { data } = useAppSelector((store) => store.userOrders);
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_SUCCESS });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  const ingredients: IIngridientsOrder[] = useSelector(getIngridients);
  const getFeeds: {
    createdAt: string;
    ingredients: Array<string>;
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
  }[] = useSelector(getWsAllIngridients);

  let loading = false;
  let data: {
    createdAt: string;
    ingredients: Array<string>;
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
  } = {
    createdAt: "",
    ingredients: [],
    name: "",
    number: 0,
    status: "",
    updatedAt: "",
    _id: "",
  };
  if (!loading) {
    console.log(data);
    for (let i = 0; i < getFeeds.length; i++) {
      if (getFeeds[i]._id === idFeed) {
        data = getFeeds[i];
        console.log(getFeeds[i]);
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
  console.log(orderDetailsPopup.ingredientsData);
  return (
    <>
      <OrderDetailsPopup feedOrderData={orderDetailsPopup} />
    </>
  );
};
