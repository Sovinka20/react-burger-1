export const oldUserData = (store: { AuthReducer: { oldUserData: any } }) =>
  store.AuthReducer.oldUserData;
//export const isUserAuthentificated = (store) => store.AuthReducer.isUserAuthentificated;
export const isAuthChecked = (store: { AuthReducer: { isAuthChecked: any } }) =>
  store.AuthReducer.isAuthChecked;
export const isResetPassword = (store: {
  AuthReducer: { resetPassword: any };
}) => store.AuthReducer.resetPassword;
export const userData = (store: { AuthReducer: { user: any } }) =>
  store.AuthReducer.user;
