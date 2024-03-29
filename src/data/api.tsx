import { getCookie } from "./cookie";

export const BASE_URL = "https://norma.nomoreparties.space/api";
export const WS_ORDERS_URL = "wss://norma.nomoreparties.space/orders/all";
export const WS_USER_ORDERS_URL = "wss://norma.nomoreparties.space/orders";
export const WS_URL_ORDERS_ALL = "wss://norma.nomoreparties.space/orders/all";
export const WS_URL_ORDERS_USER_HISTORY =
  "wss://norma.nomoreparties.space/orders";

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const GET_HEADERS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    authorization: `${getCookie("accessToken")}`,
  },
};

export const PATCH_HEADERS = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    authorization: `${getCookie("accessToken")}`,
  },
};
