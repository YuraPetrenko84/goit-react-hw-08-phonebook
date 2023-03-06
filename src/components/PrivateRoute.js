import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { selectIsReLogIn } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isReLogIn = useSelector(selectIsReLogIn);
  const shouldRedirect = !isLoggedIn && !isReLogIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
