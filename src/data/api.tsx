export const BASE_URL = "https://norma.nomoreparties.space/api";
export const WS_ORDERS_URL = "wss://norma.nomoreparties.space/orders/all";
export const WS_USER_ORDERS_URL = "wss://norma.nomoreparties.space/orders";
export const WS_URL_ORDERS_ALL = "wss://norma.nomoreparties.space/orders/all";
export const WS_URL_ORDERS_USER_HISTORY =
  "wss://norma.nomoreparties.space/orders";

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

// type TUserData = {
//   name?: string;
//   email?: string;
//   password?: string;
// };

//export const api = new Api(BASE_URL);

//   return {
//     fetchGet,
//     fetchPost,
//     refreshToken,
//     fetchSecurePost,
//     fetchSecurePatch,
//     fetchSecureGet,
//     logout,
//   };
// };

// export const getIngredientsData = () => {
//   return fetch(`${BASE_URL}/ingredients`).then(checkResponse);
// };

export const GET_HEADERS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    authorization: `${localStorage.getItem("accessToken")}`,
  },
};

export const PATCH_HEADERS = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    authorization: `${localStorage.getItem("accessToken")}`,
  },
  // body: JSON.stringify(value),
};
