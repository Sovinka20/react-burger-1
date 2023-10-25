import {
  ADD_BUN_INGREDIENT_BUN,
  ADD_INGREDIENT,
  CHANGE_INGEDIENT,
  DELETE_INGREDIENT,
  DRAG_OFF,
  DRAG_ON,
  RESET_INGREDIENTS,
} from "./actions";
import { BurgerConstructorReducer as reducer, initialState } from "./reducer";
describe("Тест Редьюсера BurgerConstructorReducer", () => {
  it("should ADD_INGREDIENT", () => {
    const payload = {
      _id: "",
      type: "",
      image_large: "",
      image_mobail: "",
      image: "",
      name: "",
      calories: 0,
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      price: 0,
    };
    expect(reducer(initialState, { type: ADD_INGREDIENT, payload })).toEqual({
      ...initialState,
      ingredients: [...initialState.ingredients, payload],
    });
  });

  it("should CHANGE_INGEDIENT", () => {
    const payload = [
      {
        _id: "",
        type: "",
        image_large: "",
        image_mobail: "",
        image: "",
        name: "",
        calories: 0,
        proteins: 0,
        fat: 0,
        carbohydrates: 0,
        price: 0,
      },
    ];
    expect(reducer(initialState, { type: CHANGE_INGEDIENT, payload })).toEqual({
      ...initialState,
      ingredients: [...payload],
    });
  });

  it("should ADD_BUN_INGREDIENT_BUN", () => {
    const payload = {
      _id: "",
      type: "",
      image_large: "",
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
      reducer(initialState, { type: ADD_BUN_INGREDIENT_BUN, payload })
    ).toEqual({
      ...initialState,
      bun: payload,
    });
  });

  it("should DELETE_INGREDIENT", () => {
    const payload = [
      {
        _id: "",
        type: "",
        image_large: "",
        image_mobail: "",
        image: "",
        name: "",
        calories: 0,
        proteins: 0,
        fat: 0,
        carbohydrates: 0,
        price: 0,
      },
    ];
    expect(reducer(initialState, { type: DELETE_INGREDIENT, payload })).toEqual(
      {
        ...initialState,
        ingredients: [...payload],
      }
    );
  });

  it("should RESET_INGREDIENTS", () => {
    expect(reducer(initialState, { type: RESET_INGREDIENTS })).toEqual({
      ...initialState,
      ingredients: [],
      bun: null,
    });
  });

  it("should DRAG_ON", () => {
    expect(reducer(initialState, { type: DRAG_ON })).toEqual({
      ...initialState,
      isDrag: true,
    });
  });

  it("should DRAG_OFF", () => {
    expect(reducer(initialState, { type: DRAG_OFF })).toEqual({
      ...initialState,
      isDrag: false,
    });
  });
});
