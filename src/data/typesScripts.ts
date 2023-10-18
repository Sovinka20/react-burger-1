import { store } from "../services/store";
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
  // | TForgotPassActions
  // // | TIngredientsActions
  // | TLoginActions
  // // | TOrderActions
  // | TPreloaderActions
  // | TRefreshTokenActions
  // | TRegisterActions
  // | TRequestInformationActions
  // | TRestorePasswordActions
  // TUserActions
  TWSOrdersActions | TWSUserHistoryActions;
