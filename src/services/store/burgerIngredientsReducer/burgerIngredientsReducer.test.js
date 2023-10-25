import {
  GET_INGREDIENT,
  GET_INGRIDIENTS_ERRORE,
  GET_INGRIDIENTS_SUCCESS,
} from "./actions";
import { BurgerIngredientsReducer as reducer, initialState } from "./reducer";
describe("Тест Редьюсера BurgerIngredientsReducer", () => {
  it("should GET_INGREDIENT", () => {
    const payload = false;

    expect(reducer(initialState, { type: GET_INGREDIENT, payload })).toEqual({
      ...initialState,
      isLoading: payload,
      error: false,
    });
  });

  it("should GET_INGRIDIENTS_SUCCESS", () => {
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
    expect(
      reducer(initialState, { type: GET_INGRIDIENTS_SUCCESS, payload })
    ).toEqual({
      ...initialState,
      isLoading: false,
      ingredients: payload,
    });
  });

  it("should GET_INGRIDIENTS_ERRORE", () => {
    const payload = true;

    expect(
      reducer(initialState, { type: GET_INGRIDIENTS_ERRORE, payload })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: payload,
    });
  });
});
