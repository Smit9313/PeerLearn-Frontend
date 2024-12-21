import { useSelector, useDispatch } from "react-redux";
import { loginUser, logout, registerUser } from "../store/slices/authSlice";

export const useAuth = () => {
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = async (credentials) => {
    try {
      await dispatch(loginUser(credentials)).unwrap();
      return true;
    } catch (error) {
      return false;
    }
  };

  const userRegister = async (userData) => {
    try {
      await dispatch(registerUser(userData)).unwrap();
      return true;
    } catch (error) {
      return false;
    }
  };

  const userLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return {
    user,
    userLogin,
    userRegister,
    userLogout,
    isAuthenticated,
    loading,
    error
  };
};
