import {
  CHANGE_RESET_PASSWORD,
  CHANGE_USER_DATA,
  IS_USER_CHECKED,
  LOGOUT_USER,
  USER_LOGIN_AUTHORIZATION,
} from "./actions";
import { AuthReducer as reducer, initialState } from "./reducer";
describe("Тест Редьюсера AuthReducer", () => {
  it("should USER_LOGIN_AUTHORIZATION", () => {
    const payload = { email: "test", name: "test", password: "test" };
    expect(
      reducer(initialState, { type: USER_LOGIN_AUTHORIZATION, payload })
    ).toEqual({
      ...initialState,
      user: { ...payload },
      oldUserData: { ...payload },
      success: true,
    });
  });

  it("should CHANGE_USER_DATA", () => {
    const payload = { email: "test", name: "test", password: "test" };

    expect(reducer(initialState, { type: CHANGE_USER_DATA, payload })).toEqual({
      ...initialState,
      user: { ...payload },
    });
  });

  it("should IS_USER_CHECKED", () => {
    const payload = true;

    expect(reducer(initialState, { type: IS_USER_CHECKED, payload })).toEqual({
      ...initialState,
      isAuthChecked: payload,
    });
  });

  it("should LOGOUT_USER", () => {
    expect(reducer(initialState, { type: LOGOUT_USER })).toEqual({
      ...initialState,
      user: null,
      oldUserData: null,
      isAuthChecked: false,
      resetPassword: false,
    });
  });

  it("should CHANGE_RESET_PASSWORD", () => {
    const payload = true;

    expect(
      reducer(initialState, { type: CHANGE_RESET_PASSWORD, payload })
    ).toEqual({
      ...initialState,
      resetPassword: payload,
    });
  });
});
