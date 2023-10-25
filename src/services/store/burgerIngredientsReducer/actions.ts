import { ISocketAnswer } from "../../../data/typesScripts";

export const GET_INGRIDIENTS_REQUEST = "GET_INGRIDIENTS_REQUEST";
export const GET_INGRIDIENTS_ERRORE = "GET_INGRIDIENTS_ERRORE";
export const GET_INGRIDIENTS_SUCCESS = "GET_INGRIDIENTS_SUCCESS";

export interface IGetIngredintsReq {
  readonly type: typeof GET_INGRIDIENTS_REQUEST;
  payload: boolean;
}
export interface IGetIngredintsErr {
  readonly type: typeof GET_INGRIDIENTS_ERRORE;
  payload: boolean;
}
export interface IGetIngredintsSucc {
  readonly type: typeof GET_INGRIDIENTS_SUCCESS;
  payload: ISocketAnswer;
}

export type TBurgerIngredientsActions =
  | IGetIngredintsReq
  | IGetIngredintsErr
  | IGetIngredintsSucc;
