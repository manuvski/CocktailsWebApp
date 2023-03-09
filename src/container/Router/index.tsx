import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../../views/Welcome";
import LoginForm from "../../views/Auth/Login";
import SignupForm from "../../views/Auth/Signup";
import Navbar from "../../components/Navbar";
import { getToken } from "../../services/storage";
import { useLocation, Navigate } from "react-router-dom";
import Profile from "../../views/Profile";

const Router: FC = () => {
  const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    const token = getToken();
    const location = useLocation();

    if (!token) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }
    return children;
  };

  const HandleSession = ({ children }: { children: JSX.Element }) => {
    const token = getToken();
    const location = useLocation();

    if (token) {
      if (
        location.pathname === "/signup" ||
        location.pathname === "/login" ||
        location.pathname === "/"
      ) {
        return <Navigate to="/landing" replace state={{ from: location }} />;
      }
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HandleSession>
              <Welcome />
            </HandleSession>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <HandleSession>
              <LoginForm />
            </HandleSession>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <HandleSession>
              <SignupForm />
            </HandleSession>
          }
        ></Route>
    
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Profile />
              </>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
