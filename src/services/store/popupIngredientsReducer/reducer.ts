import {
  CLOSE_INGREDIENTS_POPUP,
  IS_OPEN_CLOSE_INGREDIENTS_POPUP,
  OPEN_INGREDIENTS_POPUP,
  TOGGLE_INGREDIENTS_POPUP,
  TPopupIngredientsActions,
} from "./actions";

export type TIngredientsReducer = {
  isOpenCloseIngredient: boolean;
};

export const initialState: TIngredientsReducer = {
  isOpenCloseIngredient: false,
};

export const popupIngredientsReducer = (
  state = initialState,
  action: TPopupIngredientsActions
) => {
  switch (action.type) {
    case OPEN_INGREDIENTS_POPUP:
      return { ...state, isOpenCloseIngredient: true };
    case CLOSE_INGREDIENTS_POPUP:
      return { ...state, isOpenCloseIngredient: false };
    case TOGGLE_INGREDIENTS_POPUP:
      return { ...state, isOpenCloseIngredient: !state.isOpenCloseIngredient };
    case IS_OPEN_CLOSE_INGREDIENTS_POPUP:
      return { ...state, isOpenCloseIngredient: state.isOpenCloseIngredient };
    default:
      return state;
  }
};
