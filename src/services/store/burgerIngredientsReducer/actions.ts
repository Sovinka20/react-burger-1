import { IIngredientDetails } from "../../../data/typesScripts";

export const GET_INGRIDIENTS_REQUEST = "GET_INGRIDIENTS_REQUEST";
export const GET_INGRIDIENTS_ERRORE = "GET_INGRIDIENTS_ERRORE";
export const GET_INGRIDIENTS_SUCCESS = "GET_INGRIDIENTS_SUCCESS";

export interface IGetIngredintsReq {
  readonly type: typeof GET_INGRIDIENTS_REQUEST;
  payload: {
    type: string;
    payload: {
      data: {
        orders: [
          createdAt: string,
          ingredients: Array<string>,
          name: string,
          number: number,
          status: string,
          updatedAt: string,
          _id: string
        ];
        success: boolean;
        total: number;
        totalToday: number;
      };
    };
  };
}
export interface IGetIngredintsErr {
  readonly type: typeof GET_INGRIDIENTS_ERRORE;
  payload: {
    type: string;
    payload: {
      data: {
        orders: [
          createdAt: string,
          ingredients: Array<string>,
          name: string,
          number: number,
          status: string,
          updatedAt: string,
          _id: string
        ];
        success: boolean;
        total: number;
        totalToday: number;
      };
    };
  };
}
export interface IGetIngredintsSucc {
  readonly type: typeof GET_INGRIDIENTS_SUCCESS;
  payload: {
    type: string;
    payload: {
      data: {
        orders: [
          createdAt: string,
          ingredients: Array<string>,
          name: string,
          number: number,
          status: string,
          updatedAt: string,
          _id: string
        ];
        success: boolean;
        total: number;
        totalToday: number;
      };
    };
  };
}

export type TBurgerIngredientsActions =
  | IGetIngredintsReq
  | IGetIngredintsErr
  | IGetIngredintsSucc;

export const getIngredients = (payload: IIngredientDetails[]) => ({
  type: GET_INGRIDIENTS_SUCCESS,
  payload,
});
