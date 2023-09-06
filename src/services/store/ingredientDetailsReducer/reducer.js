export const GET_INGREDIENT = "GET_INGREDIENT";
export const SET_INGREDIENT = "SET_INGREDIENT";
export const CLEAR_INGREDIENT = "CLEAR_INGREDIENT";

const initialState = {
  ingredient: [],
};

export const IngredientDetailsReducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case GET_INGREDIENT:
      return { ...state, ingredient: { ...state.ingredient } };
    case SET_INGREDIENT:
      return { ...state, ingredient: action.peyload };
    case CLEAR_INGREDIENT:
      return { ...state, ingredient: [] };
    default:
      return state;
  }
};
