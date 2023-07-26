import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import "./index.css";
import { rootReducer } from "./services/store/reducers";

const store = configureStore({
  reducer: rootReducer,
  //  middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(
  //     wsOrdersAllMiddleware("wss://norma.nomoreparties.space/orders/all")
  //    ),
});
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();