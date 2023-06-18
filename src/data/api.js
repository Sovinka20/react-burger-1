export const BASE_URL = "https://norma.nomoreparties.space/api";

class Api {
  constructor(urlApi) {
    this.urlApi = urlApi;
  }

  validationJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getData() {
    return fetch(`${this.urlApi}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => this.validationJson(res));
  }
}

export const api = new Api(BASE_URL);

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
