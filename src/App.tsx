import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navigation from './components/Navigation';
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from './hooks/useAuth';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Home = lazy(() => import('./pages/Home'));
const Modal = lazy(() => import('./components/Modal'));

const App = () => {

  const { loading, logged, auth, fecthAuth, fecthLogout, values, errors, handleChange, handleSubmit } = useAuth();
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Navigation auth={auth} logout={fecthLogout} />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                redirectTo="/dashboard"
                isAllowed={!auth}
              >
                <Modal
                  state={true}
                  title={'Sign In'}
                  showHeader={false}
                  showOverlay={true}
                  positionModal="center"
                  padding={'0px'}
                >
                  <Login
                    loading={loading}
                    logged={logged}
                    auth={auth}
                    fecthAuth={fecthAuth}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                </Modal>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                redirectTo="/"
                isAllowed={!!auth && auth.user.role === 'admin'}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute
                redirectTo="/"
                isAllowed={!!auth && auth.user.role === 'admin'}
              >
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
