// export const openIngredientPopup = () => ({ type: CONST.OPEN_INGREDIENTS_POPUP });
// export const closeIngredientPopup = () => ({ type: CONST.CLOSE_INGREDIENTS_POPUP });
// export const toggleIngredientPopup = () => ({ type: CONST.TOGGLE_INGREDIENTS_POPUP });
// export const isOpenCloseIngredientPopup = () => ({type: CONST.IS_OPEN_CLOSE_INGREDIENTS_POPUP});

export const OPEN_INGREDIENTS_POPUP = "OPEN_INGREDIENTS_POPUP";
export const CLOSE_INGREDIENTS_POPUP = "CLOSE_INGREDIENTS_POPUP";
export const TOGGLE_INGREDIENTS_POPUP = "TOGGLE_INGREDIENTS_POPUP";
export const IS_OPEN_CLOSE_INGREDIENTS_POPUP =
  "IS_OPEN_CLOSE_INGREDIENTS_POPUP";

export interface IOpenIngredientsPopup {
  readonly type: typeof OPEN_INGREDIENTS_POPUP;
}
export interface ICloseIngredientsPopup {
  readonly type: typeof CLOSE_INGREDIENTS_POPUP;
}
export interface IToggleIngredientsPopup {
  readonly type: typeof TOGGLE_INGREDIENTS_POPUP;
}
export interface IIsOpenCloseIngredientsPopup {
  readonly type: typeof IS_OPEN_CLOSE_INGREDIENTS_POPUP;
}

export type TPopupIngredientsActions =
  | IOpenIngredientsPopup
  | ICloseIngredientsPopup
  | IToggleIngredientsPopup
  | IToggleIngredientsPopup
  | IIsOpenCloseIngredientsPopup;
