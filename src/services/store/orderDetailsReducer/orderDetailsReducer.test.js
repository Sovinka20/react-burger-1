import { RESET_ORDER_DATA, SET_ORDER_DATA } from "./actions";
import { initialState, OrderDetailsReducer as reducer } from "./reducer";
describe("Тест Редьюсера OrderDetailsReducer", () => {
  it("should SET_ORDER_DATA", () => {
    const payload = {
      success: false,
      name: "test",
      order: {
        ingredients: [],
        _id: "test",
        owner: {
          name: "test",
          email: "",
          createdAt: "test",
          updatedAt: "test",
        },
        status: "test",
        name: "test",
        createdAt: "test",
        updatedAt: "test",
        number: 0,
        price: 0,
      },
    };
    expect(reducer(initialState, { type: SET_ORDER_DATA, payload })).toEqual({
      ...initialState,
      orderDetails: payload,
    });
  });

  it("should RESET_ORDER_DATA", () => {
    expect(reducer(initialState, { type: RESET_ORDER_DATA })).toEqual(
      initialState
    );
  });
});
