import { store } from "../services/store";
import { TUserActions } from "../services/store/authReducer/actions";
import { TBurgerConstructorActions } from "../services/store/burgerConstructorReducer/actions";
import { TBurgerIngredientsActions } from "../services/store/burgerIngredientsReducer/actions";
import { TIngredient } from "../services/store/ingredientDetailsReducer/actions";
import { TOrderDataActions } from "../services/store/orderDetailsReducer/actions";
import { TPopupIngredientsActions } from "../services/store/popupIngredientsReducer/actions";
import { TPopupReducerActions } from "../services/store/popupOrderRecucer/actions";
import { TWSOrdersActions } from "../services/store/wsOrdersAll/actionsFeed";
import { TWSUserHistoryActions } from "../services/store/wsOrdersAll/actionsProfile";

export interface ISocketOrder {
  ingredients: string[];
  _id: string;
  status: string;
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

export interface ISocketAnswer {
  success: boolean;
  data: ISocketOrder[];
  total: number;
  totalToday: number;
}
export type TOrder = {
  ingredients: string[];
  _id: string;
  status?: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

export type TWSData = {
  success: boolean;
  orders: TOrder[];
  total: 0;
  totalToday: 0;
};
export interface IIngredientDetails {
  ingredientsData: {
    _id: string;
    type: string;
    image_large: string;
    image_mobail: string;
    image: string;
    name: string;
    calories: number;
    proteins: number;
    fat: number;
    carbohydrates: number;
    price: number;
  }[];
}

export interface IIngridients {
  _id: string;
  type: string;
  image_large: string;
  image_mobail: string;
  image: string;
  name: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  price: number;
  key?: string;
}
export interface IIngridientsOrder {
  _id: string;
  type: string;
  image_large: string;
  image_mobile: string;
  image_mobail: string;
  image: string;
  name: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  price: number;
  numberOfComponents: number;
}

export interface IOrderDetails {
  feedOrderData: {
    number: number;
    name: string;
    status: string;
    createdAt: string;
    generalPriceList: number;
    ingredientsData: [
      {
        _id: string;
        type: string;
        image_large: string;
        image_mobail: string;
        image: string;
        name: string;
        calories: number;
        proteins: number;
        fat: number;
        carbohydrates: number;
        price: number;
        numberOfComponents: number;
      }
    ];
  }[];
}
export type TStore = ReturnType<typeof store.getState>;

export type THandlerModelClose =
  | React.BaseSyntheticEvent<HTMLElement>
  | React.MouseEvent<HTMLButtonElement>
  | KeyboardEvent
  | React.MouseEvent<HTMLDivElement>
  | React.KeyboardEvent<HTMLDivElement>
  | MouseEvent;

export type TUser = {
  name: string;
  email: string;
  password?: string;
};

export type TApplicationActions =
  | TUserActions
  | TOrderDataActions
  | TPopupIngredientsActions
  | TIngredient
  | TBurgerIngredientsActions
  | TPopupReducerActions
  | TBurgerConstructorActions
  | TWSOrdersActions
  | TWSUserHistoryActions;
