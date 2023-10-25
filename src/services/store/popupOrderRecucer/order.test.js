import {
  CLOSE_ORDER_POPUP,
  IS_OPEN_CLOSE_ORDER_POPUP,
  OPEN_ORDER_POPUP,
  TOGGLE_ORDER_POPUP,
} from "./actions";
import { initialState, popupOrderReducer as reducer } from "./reducer";

describe("Тест Редьюсера popupOrderReducer", () => {
  it("should OPEN_ORDER_POPUP", () => {
    expect(reducer(initialState, { type: OPEN_ORDER_POPUP })).toEqual({
      ...initialState,
      isOpenCloseOrder: true,
    });
  });

  it("should CLOSE_ORDER_POPUP", () => {
    expect(reducer(initialState, { type: CLOSE_ORDER_POPUP })).toEqual({
      ...initialState,
      isOpenCloseOrder: false,
    });
  });

  it("should TOGGLE_ORDER_POPUP", () => {
    expect(reducer(initialState, { type: TOGGLE_ORDER_POPUP })).toEqual({
      ...initialState,
      isOpenCloseOrder: !initialState.isOpenCloseOrder,
    });
  });
  it("should IS_OPEN_CLOSE_ORDER_POPUP", () => {
    expect(reducer(initialState, { type: IS_OPEN_CLOSE_ORDER_POPUP })).toEqual({
      ...initialState,
      isOpenCloseOrder: initialState.isOpenCloseOrder,
    });
  });
});
