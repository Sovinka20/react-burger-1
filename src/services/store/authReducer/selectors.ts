export const oldUserData = (store: {
  AuthReducer: { oldUserData: { email: string; name: string } };
}) => store.AuthReducer.oldUserData;
export const isAuthChecked = (store: {
  AuthReducer: { isAuthChecked: boolean };
}) => store.AuthReducer.isAuthChecked;
export const isResetPassword = (store: {
  AuthReducer: { resetPassword: boolean };
}) => store.AuthReducer.resetPassword;
export const userData = (store: {
  AuthReducer: { user: { email: string; name: string } };
}) => store.AuthReducer.user;
