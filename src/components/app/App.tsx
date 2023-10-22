import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL, GET_HEADERS } from "../../data/api";
import { Feed } from "../../pages/feed/feed";
import ForgotPassword from "../../pages/forgot-password/forgotPassword";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import { PageFeedDetailsPopup } from "../../pages/order-details-popup/pageOrderDetailsPopup";
import { PageOrderDetailsPopup } from "../../pages/order-details-popup/pageOrderDetailsPopupOrder";
import { Orders } from "../../pages/orders/orders";
import Profile from "../../pages/profile/profile";
import Register from "../../pages/register/register";
import ResetPassword from "../../pages/reset-password/resetPassword";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { fetchIngredients } from "../../services/store/asyncActions/ingredients";
import { fetchWithRefresh } from "../../services/store/asyncActions/userInfo";
import {
  IS_USER_CHECKED,
  USER_LOGIN_AUTHORIZATION,
} from "../../services/store/authReducer/actions";
import {
  getIngredientsError,
  getIngridients,
  getIsLoading,
} from "../../services/store/burgerIngredientsReducer/selectors";
import { ADD_FEED_ORDER_DATA } from "../../services/store/popupFeedOrderReducer/actions";
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
  const error = useAppSelector(getIngredientsError);
  const isLoading = useAppSelector(getIsLoading);
  const ingredientsData = useAppSelector(getIngridients);

  const errorOrder = useAppSelector(getIngredientsError);
  const isLoadingOrder = useAppSelector(getIsLoading);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch({ type: IS_USER_CHECKED, payload: true });
      fetchWithRefresh(`${BASE_URL}/auth/user`, GET_HEADERS)
        .then((res) => {
          dispatch({
            type: USER_LOGIN_AUTHORIZATION,
            payload: res.user,
          });
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      dispatch({ type: IS_USER_CHECKED, payload: false });
    }
    dispatch(fetchIngredients());

    if (isLoadingOrder)
      dispatch({
        type: ADD_FEED_ORDER_DATA,
        payload: feedOrderData,
      });
  }, [dispatch]);

  const background = location.state && location.state.background;
  const feedOrderData = location.state && location.state.order;

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if ((!isLoading && error) || (!isLoadingOrder && errorOrder)) {
    return <h1>{error}</h1>;
  }

  const handlerModelClose = (path: string) => {
    navigate(`${path}`);
  };
  return (
    <div className={styles.root}>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route
            path="/ingredients/:ingredientId"
            element={
              // <Modal handlerModelClose={() => handlerModelClose("/")}>
              <IngredientDetails ingredientsData={ingredientsData} />
              // </Modal>
            }
          />
          <Route
            path="/feed/:id"
            element={<PageFeedDetailsPopup />}
            // <OrderDetailsPopup feedOrderData={feedOrderData} />}
          />
          <Route
            path="profile/orders/:id"
            element={<PageOrderDetailsPopup />}
          />

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
