import React from "react";
//import { DndProvider } from "react-dnd";
//import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
//import BurgerConstructor from "../burger-constructor/burgerConstructor";
//import BurgerIngredients from "../burger-ingredients/burgerIngredients";
//import AppHeader from "../header/appHeader";
//import styles from "./app.module.css";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL, fetchWithRefresh, GET_HEADERS } from "../../data/api";
import ForgotPassword from "../../pages/forgot-password/forgotPassword";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import { NotFound404 } from "../../pages/not-found-page/not-found";
import Profile from "../../pages/profile/profile";
import Register from "../../pages/register/register";
import ResetPassword from "../../pages/reset-password/resetPassword";
import { fetchIngredients } from "../../services/store/asyncActions";
import { isUserChecked } from "../../services/store/authReducer/actions";
import { USER_LOGIN_AUTHORIZATION } from "../../services/store/authReducer/reducer";
import {
  getIngredientsError,
  getIngridients,
  getIsLoading,
} from "../../services/store/burgerIngredientsReducer/selectors";
import { clearIngredient } from "../../services/store/ingredientDetailsReducer/actions";
//import { clearIngredient } from "../../services/store/ingredientDetailsReducer/actions";
import IngredientDetails from "../ingredient-details/ingredientDetails";
import Layout from "../layout/layout";
import Modal from "../modal/modal";
import { ProfileForm } from "../profile-form/profileForm";
import ProtectedRouteElement from "../protected-route-element/protectedRouteElement";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const error = useSelector(getIngredientsError);
  const isLoading = useSelector(getIsLoading);
  const ingredientsData = useSelector(getIngridients);

  const dispatch = useDispatch();

  //   React.useEffect(() => {

  // const  ws = new WebSocket(`wss://norma.nomoreparties.space/orders/all`);
  // ws.onopen = (event) => {
  //     console.log("Соединение установлено")
  // }
  // ws.onmessage = (event: MessageEvent) => {
  //   console.log(JSON.parse(event.data))
  // }
  //   },[])

  React.useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(isUserChecked(true));
      fetchWithRefresh(`${BASE_URL}/auth/user`, GET_HEADERS)
        .then((res) => {
          dispatch({
            type: USER_LOGIN_AUTHORIZATION,
            payload: res.user,
          });
        })
        .catch((res) => console.log(res));
    } else {
      dispatch(isUserChecked(false));
    }
    dispatch(fetchIngredients() as unknown as any);
  }, [dispatch]);

  const background = location.state && location.state.background;

  const handlerModelClose = () => {
    navigate("/");
    dispatch(clearIngredient());
  };
  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (!isLoading && error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProtectedRouteElement element={<Home />} />} />
          <Route
            path="login"
            element={<ProtectedRouteElement element={<Login />} />}
          />
          <Route
            path="register"
            element={<ProtectedRouteElement element={<Register />} />}
          />
          <Route
            path="forgot-password"
            element={<ProtectedRouteElement element={<ForgotPassword />} />}
          />
          <Route
            path="reset-password"
            element={<ProtectedRouteElement element={<ResetPassword />} />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                //  onlyAuthorizedUsers={false}
                element={<Profile />}
              />
            }
          >
            <Route index element={<ProfileForm />} />
            <Route
              path="orders"
              element={
                <NotFound404 />
                //<Orders />
              }
            />
          </Route>
          <Route
            path="order"
            element={
              <ProtectedRouteElement
                element={
                  // <Orders />
                  <NotFound404 />
                }
              />
            }
          />
          <Route
            path="/ingredients/:ingredientId"
            element={<IngredientDetails ingredientsData={ingredientsData} />}
          />
        </Route>
        <Route key="page404" path="*" element={<NotFound404 />} />;
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal handlerModelClose={handlerModelClose}>
                <IngredientDetails ingredientsData={ingredientsData} />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
