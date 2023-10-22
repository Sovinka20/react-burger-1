import { BASE_URL, checkResponse } from "../../../data/api";
import { RESET_INGREDIENTS } from "../burgerConstructorReducer/actions";
import { SET_ORDER_DATA } from "../orderDetailsReducer/actions";
import { AppThunk } from "../reducers";

// Отправка заказа
export const fetchOrderPost: AppThunk =
  (ingredientsList: Array<string>) => (dispatch) => {
    const token: string = localStorage.getItem("accessToken") || "";
    fetch(`${BASE_URL}/orders/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: token,
      },
      body: JSON.stringify({ ingredients: ingredientsList }),
    })
      .then(checkResponse)
      .then((res) => {
        // console.log(res);
        dispatch({ type: SET_ORDER_DATA, payload: res });
        dispatch({ type: RESET_INGREDIENTS });
      })
      .catch((err) => {
        console.log(err);
      });
  };
