import { BASE_URL, checkResponse } from "../../../data/api";
import { getCookie } from "../../../data/cookie";
import { RESET_INGREDIENTS } from "../burgerConstructorReducer/actions";
import { SET_ORDER_DATA } from "../orderDetailsReducer/actions";
import { AppThunk } from "../reducers";

// Отправка заказа
export const fetchOrderPost: AppThunk =
  (ingredientsList: Array<string>) => (dispatch) => {
    fetch(`${BASE_URL}/orders/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${getCookie("accessToken")}`,
      },
      body: JSON.stringify({ ingredients: ingredientsList }),
    })
      .then(checkResponse)
      .then((res) => {
        dispatch({ type: SET_ORDER_DATA, payload: res });
        dispatch({ type: RESET_INGREDIENTS });
      })
      .catch((err) => {
        console.log(err);
      });
  };
