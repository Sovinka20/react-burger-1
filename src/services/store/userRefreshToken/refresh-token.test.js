import {
  REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_START,
  REFRESH_TOKEN_SUCCESS,
} from "./actionsRT";
import { initialState, refreshTokenReducer as reducer } from "./reducerRT";

describe("Тест Редьюсера refreshTokenReducer", () => {
  it("should REFRESH_TOKEN_START", () => {
    expect(reducer(initialState, { type: REFRESH_TOKEN_START })).toEqual({
      ...initialState,
      isRequest: true,
      isError: false,
    });
  });
  it("should REFRESH_TOKEN_ERROR", () => {
    expect(reducer(initialState, { type: REFRESH_TOKEN_ERROR })).toEqual({
      ...initialState,
      isRequest: false,
      isError: true,
    });
  });
  it("should REFRESH_TOKEN_SUCCESS", () => {
    const payload = {};
    expect(
      reducer(initialState, { type: REFRESH_TOKEN_SUCCESS, payload })
    ).toEqual({
      ...initialState,
      isRequest: false,
      isError: false,
    });
  });
});
