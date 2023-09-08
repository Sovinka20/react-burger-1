import { IIngridients } from "../../../data/typesScripts";

export const getBurgerConstructorList = (state: {
  BurgerConstructorReducer: { ingredients: IIngridients[] };
}) => state.BurgerConstructorReducer.ingredients;
export const getBurgerConsructorBun = (state: {
  BurgerConstructorReducer: { bun: IIngridients };
}) => state.BurgerConstructorReducer.bun;
export const elementIsDrag = (state: {
  BurgerConstructorReducer: { isDrag: boolean };
}) => state.BurgerConstructorReducer.isDrag;
