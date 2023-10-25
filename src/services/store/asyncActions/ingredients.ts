import { BASE_URL, checkResponse } from "../../../data/api";
import {
  GET_INGRIDIENTS_ERRORE,
  GET_INGRIDIENTS_REQUEST,
  GET_INGRIDIENTS_SUCCESS,
} from "../burgerIngredientsReducer/actions";
import { AppThunk } from "../reducers";

// Получение ингредиентов
export const fetchIngredients: AppThunk = () => (dispatch) => {
  dispatch({
    type: GET_INGRIDIENTS_REQUEST,
    payload: true,
  });
  fetch(`${BASE_URL}/ingredients`)
    .then(checkResponse)
    .then((json) => {
      dispatch({
        type: GET_INGRIDIENTS_SUCCESS,
        payload: json.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_INGRIDIENTS_ERRORE,
        payload: true,
        //`Произошла ошибка при получении данных: ${err.status}`,
      });
    });
};
