import {
  ERROR_RESTORE_PASS,
  RESET_REQUEST_ACCEPT,
  START_RESTORE_PASS,
  SUCCESS_RESTORE_PASS,
} from "./actions";
import { initialState, restorePasswordReducer as reducer } from "./reducer";

describe("Тест Редьюсера restorePasswordReducer", () => {
  it("should SUCCESS_RESTORE_PASS", () => {
    expect(reducer(initialState, { type: SUCCESS_RESTORE_PASS })).toEqual({
      ...initialState,
      isRequest: false,
      isError: false,
      hasRequest: true,
    });
  });

  it("should ERROR_RESTORE_PASS", () => {
    expect(reducer(initialState, { type: ERROR_RESTORE_PASS })).toEqual({
      ...initialState,
      isRequest: false,
      isError: true,
    });
  });

  it("should START_RESTORE_PASS", () => {
    expect(reducer(initialState, { type: START_RESTORE_PASS })).toEqual({
      ...initialState,
      isRequest: true,
      isError: false,
    });
  });

  it("should RESET_REQUEST_ACCEPT", () => {
    expect(reducer(initialState, { type: RESET_REQUEST_ACCEPT })).toEqual({
      ...initialState,
      hasRequest: false,
    });
  });
});
