import { checkResponse } from "../../../data/api";
import { TRefreshToken } from "../../../data/typesScripts";
import { requestRefreshToken } from "./userToken";

/**
 * Получить/изменить данные о пользователе.
 */

type TPATCH_HEADERS = {
  method: string;
  headers: {
    "Content-Type": string;
    authorization: string;
  };
  body: string;
};

type TGET_HEADERS = {
  method: string;
  headers: {
    "Content-Type": string;
    authorization: string;
  };
};

export const fetchWithRefresh = (
  url: string,
  options: TPATCH_HEADERS | TGET_HEADERS
) => {
  return fetch(url, options)
    .then((res) => {
      return checkResponse(res);
    })
    .catch((err) => {
      const refreshData = requestRefreshToken() as unknown as TRefreshToken;
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      options.headers.authorization = refreshData.accessToken;
      return fetch(url, options).then((res) => {
        return checkResponse(res);
      });
    });
};
