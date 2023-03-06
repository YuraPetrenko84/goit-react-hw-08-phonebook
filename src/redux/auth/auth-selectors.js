export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsReLogIn = state => state.auth.selectIsReLogIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
