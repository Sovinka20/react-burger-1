import {
  CLOSE_INGREDIENTS_POPUP,
  IS_OPEN_CLOSE_INGREDIENTS_POPUP,
  OPEN_INGREDIENTS_POPUP,
  TOGGLE_INGREDIENTS_POPUP,
} from "./actions";
import { initialState, popupIngredientsReducer as reducer } from "./reducer";

describe("Тест Редьюсера popupIngredientsReducer", () => {
  it("should OPEN_INGREDIENTS_POPUP", () => {
    expect(reducer(initialState, { type: OPEN_INGREDIENTS_POPUP })).toEqual({
      ...initialState,
      isOpenCloseIngredient: true,
    });
  });

  it("should CLOSE_INGREDIENTS_POPUP", () => {
    expect(reducer(initialState, { type: CLOSE_INGREDIENTS_POPUP })).toEqual({
      ...initialState,
      isOpenCloseIngredient: false,
    });
  });

  it("should TOGGLE_INGREDIENTS_POPUP", () => {
    expect(reducer(initialState, { type: TOGGLE_INGREDIENTS_POPUP })).toEqual({
      ...initialState,
      isOpenCloseIngredient: !initialState.isOpenCloseIngredient,
    });
  });
  it("should IS_OPEN_CLOSE_INGREDIENTS_POPUP", () => {
    expect(
      reducer(initialState, { type: IS_OPEN_CLOSE_INGREDIENTS_POPUP })
    ).toEqual({
      ...initialState,
      isOpenCloseIngredient: initialState.isOpenCloseIngredient,
    });
  });
});
