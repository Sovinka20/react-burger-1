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
      //   } catch (err) {
      // if (err instanceof Error && err.message === "jwt expired") {
      const refreshData = requestRefreshToken() as unknown as TRefreshToken;
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      options.headers.authorization = refreshData.accessToken;
      return fetch(url, options).then((res) => {
        return checkResponse(res);
      });
      // return await checkResponse(res);
      // } else {
      //   return Promise.reject(err);
    });
};
// };

// export const changeUserInfo: AppThunk = (data: TUser) => async (dispatch) => {
//     dispatch({ type: GET_USER_INFO_START });
//     dispatch({ type: PRELOADER_START });
//     try {
//       try {
//         const response = await fetchSecurePatch(data);
//         dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
//         dispatch({
//           type: SHOW_REQUEST_INFO,
//           payload: "Данные успешно обновлены!",
//         });
//       } catch (err) {
//         err.json().then((data_1: TErrorData) => {
//           dispatch({ type: GET_USER_INFO_ERROR });
//           dispatch({ type: SHOW_REQUEST_ERROR_INFO, payload: data_1.message });
//         });
//       }
//     } finally {
//       return dispatch({ type: PRELOADER_STOP });
//     }
//   };

// export const changeUserInfo: AppThunk = (data: TUser) => (dispatch) => {
//   dispatch({ type: GET_USER_INFO_START });
//   // dispatch({ type: PRELOADER_START });
//   return fetch(data, {
//     method: "POST",
//     headers: { ...headers, Authorization: `${getCookie("accessToken")}` },
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
//       // dispatch({
//       //   type: SHOW_REQUEST_INFO,
//       //   payload: "Данные успешно обновлены!",
//       // });
//     })
//     .catch((err) => {
//       err.json().then((data: TErrorData) => {
//         dispatch({ type: GET_USER_INFO_ERROR });
//         //   dispatch({ type: SHOW_REQUEST_ERROR_INFO, payload: data.message });
//       });
//     });
//   //   .finally(() => dispatch({ type: PRELOADER_STOP }));
// };
