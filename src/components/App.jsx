import { Route, Routes, Navigate } from 'react-router-dom';
// React
import { useEffect, lazy, Suspense } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { reLogIn } from 'redux/auth/auth-operations';
// Components
import { Layout } from './Layout/Layout';
import { selectIsReLogIn } from 'redux/auth/auth-selectors';
import BarLoader from 'react-spinners/BarLoader';
// Routes
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const loadingUser = useSelector(selectIsReLogIn);

  //  логінимось при монтуванні App якщо є токен
  useEffect(() => {
    dispatch(reLogIn());
  }, [dispatch]);

  // розмітка зарендериться після того як виконається запит за юзером
  return loadingUser ? (
    <BarLoader color="#5ac846" width="100%" />
  ) : (
    <Suspense fallback={<BarLoader color="#5ac846" width="100%" />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          ></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

// Заборонити відправляти запити поки не виконався перший
// Додати isLoading
// Стилізувати
// Додати валідацію форми
// Семантичні теги
// Форма логіна валідація
