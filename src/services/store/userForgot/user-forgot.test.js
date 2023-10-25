import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
} from "./actions";
import { forgetPasswordReducer as reducer, initialState } from "./reducer";

describe("Тест Редьюсера forgetPasswordReducer", () => {
  it("should START_FORGOT_PASS", () => {
    expect(reducer(initialState, { type: START_FORGOT_PASS })).toEqual({
      ...initialState,
      isRequest: true,
    });
  });

  it("should ERROR_FORGOT_PASS", () => {
    expect(reducer(initialState, { type: ERROR_FORGOT_PASS })).toEqual({
      ...initialState,
      isRequest: false,
      isError: true,
    });
  });

  it("should SUCCESS_FORGOT_PASS", () => {
    expect(reducer(initialState, { type: SUCCESS_FORGOT_PASS })).toEqual({
      ...initialState,
      isRequest: false,
    });
  });
});
