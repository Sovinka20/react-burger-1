import {
  ADD_FEED_ORDER_DATA,
  GET_INGRIDIENTS_ERRORE_ORDER,
  GET_REQUEST_ORDER,
} from "./actions";
import { initialState, popupFeedOrderReducer as reducer } from "./reducer";
describe("Тест Редьюсера popupFeedOrderReducer", () => {
  it("should GET_REQUEST_ORDER", () => {
    expect(reducer(initialState, { type: GET_REQUEST_ORDER })).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  it("should ADD_FEED_ORDER_DATA", () => {
    const payload = {
      _id: "test",
      name: "test",
      type: "test",
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: "test",
      image_mobile: "test",
      image_large: "test",
    };
    expect(
      reducer(initialState, { type: ADD_FEED_ORDER_DATA, payload })
    ).toEqual({
      ...initialState,
      isLoading: false,
      feedOrderData: payload,
    });
  });

  it("should GET_INGRIDIENTS_ERRORE_ORDER", () => {
    const payload = true;
    expect(
      reducer(initialState, { type: GET_INGRIDIENTS_ERRORE_ORDER, payload })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: payload,
    });
  });
});
