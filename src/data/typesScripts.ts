import { store } from "../services/store";
import { TUserActions } from "../services/store/authReducer/actions";
import { TBurgerConstructorActions } from "../services/store/burgerConstructorReducer/actions";
import { TBurgerIngredientsActions } from "../services/store/burgerIngredientsReducer/actions";
import { TIngredient } from "../services/store/ingredientDetailsReducer/actions";
import { TOrderDataActions } from "../services/store/orderDetailsReducer/actions";
import { TPopupIngredientsActions } from "../services/store/popupIngredientsReducer/actions";
import { TPopupReducerActions } from "../services/store/popupOrderRecucer/actions";
import { TForgotPassActions } from "../services/store/userForgot/actions";
import { TRefreshTokenActions } from "../services/store/userRefreshToken/actionsRT";
import { TRestorePasswordActions } from "../services/store/userResetPass/actions";
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

export type TRefreshToken = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

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

export type TCurrentOrderResponse = {
  success: boolean;
  orders: TCurrentOrder[];
};

export type TCurrentOrder = {
  _id: string;
  ingredients: string[];
  owner: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
};

export type TOrderResponse = {
  success: boolean;
  name: string;
  order: {
    ingredients: TIngredient[];
    _id: string;
    owner?: {
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
  };
};
export type TErrorData = {
  success: boolean;
  message: string;
};

export type TApplicationActions =
  // | TRefreshToken
  | TUserActions
  | TRefreshTokenActions
  | TRestorePasswordActions
  | TForgotPassActions
  | TOrderDataActions
  | TPopupIngredientsActions
  | TIngredient
  | TBurgerIngredientsActions
  | TPopupReducerActions
  | TBurgerConstructorActions
  | TWSOrdersActions
  | TWSUserHistoryActions;
