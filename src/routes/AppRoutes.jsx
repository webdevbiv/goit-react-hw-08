import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { AppBar } from '@components/AppBar/AppBar';
import HomePage from '@pages/HomePage/HomePage';
import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import ContactsPage from '@pages/ContactsPage/ContactsPage';
import NotFoundPage from '@pages/NotFound/NotFoundPage';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { refreshUser } from '@redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '@redux/auth/selectors';

const AppRoutes = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <b>Refreshing user...</b>;
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
