import { CLEAR_INGREDIENT, GET_INGREDIENT, SET_INGREDIENT } from "./actions";
import { IngredientDetailsReducer as reducer, initialState } from "./reducer";
describe("Тест Редьюсера IngredientDetailsReducer", () => {
  it("should GET_INGREDIENT", () => {
    expect(reducer(initialState, { type: GET_INGREDIENT })).toEqual({
      ...initialState,
      ingredient: { ...initialState.ingredient },
    });
  });

  it("should SET_INGREDIENT", () => {
    const payload = {
      _id: "",
      type: "",
      image_large: "",
      image_mobile: "",
      image_mobail: "",
      image: "",
      name: "",
      calories: 0,
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      price: 0,
    };
    expect(reducer(initialState, { type: SET_INGREDIENT, payload })).toEqual({
      ...initialState,
      ingredient: payload,
    });
  });

  it("should CLEAR_INGREDIENT", () => {
    expect(reducer(initialState, { type: CLEAR_INGREDIENT })).toEqual({
      ...initialState,
      ingredient: [],
    });
  });
});
