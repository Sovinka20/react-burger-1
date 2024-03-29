import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../services/store";
import {
  isResetPassword,
  userData,
} from "../../services/store/authReducer/selectors";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const FORGOT_PASSWORD = "/forgot-password";
export const RESET_PASSWORD = "/reset-password";
export const PROFILE = "/profile";
export const PROFILE_ORDERS = "/profile/orders";

const ProtectedRouteElement = ({
  element,
}: {
  element: React.ReactElement;
}) => {
  const user = useAppSelector(userData);
  const isResetPass = useAppSelector(isResetPassword);
  const location = useLocation();
  if (!user && location.pathname === "/reset-password" && !isResetPass) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  if (
    (user && location.pathname === LOGIN) ||
    (user && location.pathname === REGISTER) ||
    (user && location.pathname === FORGOT_PASSWORD) ||
    (user && location.pathname === RESET_PASSWORD)
  ) {
    const { from } = location.state || { from: { pathname: "/" } };

    return <Navigate to={from} state={{ from: location }} />;
  }

  if (
    (!user && location.pathname === PROFILE) ||
    (!user && location.pathname === PROFILE_ORDERS) ||
    (!user && location.pathname.includes(PROFILE_ORDERS))
  ) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

export default ProtectedRouteElement;
