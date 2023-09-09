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
import { Feed } from "../../pages/feed/feed";
import ForgotPassword from "../../pages/forgot-password/forgotPassword";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import { Orders } from "../../pages/orders/orders";
import Profile from "../../pages/profile/profile";
import Register from "../../pages/register/register";
import ResetPassword from "../../pages/reset-password/resetPassword";
import { fetchIngredients } from "../../services/store/asyncActions";
import { isUserChecked } from "../../services/store/authReducer/actions";
import { USER_LOGIN_AUTHORIZATION } from "../../services/store/authReducer/reducer";
import { userData } from "../../services/store/authReducer/selectors";
import { resetIngredients } from "../../services/store/burgerConstructorReducer/actions";
import {
  getIngredientsError,
  getIngridients,
  getIsLoading,
} from "../../services/store/burgerIngredientsReducer/selectors";
//import { clearIngredient } from "../../services/store/ingredientDetailsReducer/actions";
//import { clearIngredient } from "../../services/store/ingredientDetailsReducer/actions";
import IngredientDetails from "../ingredient-details/ingredientDetails";
import Layout from "../layout/layout";
import Modal from "../modal/modal";
import { OrderDetailsPopup } from "../order-details-popup/orderDetailsPopup";
import { ProfileForm } from "../profile-form/profileForm";
import ProtectedRouteElement from "../protected-route-element/protectedRouteElement";
import styles from "./app.module.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const error = useSelector(getIngredientsError);
  const isLoading = useSelector(getIsLoading);
  const ingredientsData = useSelector(getIngridients);
  const isUserAuth = useSelector(userData);

  // const feedOrderData = useSelector(getFeedOrderData);
  // console.log(feedOrderData);

  // console.log(feedOrderData);

  const dispatch = useDispatch();

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
  const feedOrderData = location.state && location.state.order;

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (!isLoading && error) {
    return <h1>{error}</h1>;
  }

  const handlerModelClose = (path: string) => {
    navigate(`${path}`);
    dispatch(resetIngredients());
  };
  return (
    <div className={styles.root}>
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
            element={<ProtectedRouteElement element={<Profile />} />}
          >
            <Route index element={<ProfileForm />} />
            <Route
              path="orders"
              element={<ProtectedRouteElement element={<Orders />} />}
            />
          </Route>
          <Route
            path="feed"
            element={<ProtectedRouteElement element={<Feed />} />}
          />
        </Route>
        <Route
          path="/ingredients/:ingredientId"
          element={
            <Modal handlerModelClose={() => handlerModelClose("/")}>
              <IngredientDetails ingredientsData={ingredientsData} />
            </Modal>
          }
        />
        <Route
          path="/feed/:id"
          element={
            <Modal handlerModelClose={() => handlerModelClose("/feed")}>
              <OrderDetailsPopup feedOrderData={feedOrderData} />
            </Modal>
          }
        />
        <Route
          path="profile/orders/:id"
          element={
            <Modal
              handlerModelClose={() => handlerModelClose("/profile/orders")}
            >
              <OrderDetailsPopup feedOrderData={feedOrderData} />
            </Modal>
          }
        />
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal handlerModelClose={() => handlerModelClose("/")}>
                <IngredientDetails ingredientsData={ingredientsData} />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            element={
              <Modal handlerModelClose={() => handlerModelClose("/feed")}>
                <OrderDetailsPopup feedOrderData={feedOrderData} />
              </Modal>
            }
          />
          <Route
            path="profile/orders/:id"
            element={
              <Modal
                handlerModelClose={() => handlerModelClose("/profile/orders")}
              >
                <OrderDetailsPopup feedOrderData={feedOrderData} />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
