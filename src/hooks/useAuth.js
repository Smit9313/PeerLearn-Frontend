import { useSelector, useDispatch } from "react-redux";
import { setCredentials, logout } from "../store/slices/authSlice";

export const useAuth = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = (userData) => {
    dispatch(setCredentials(userData));
  };

  const userLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    userLogin,
    userLogout,
    isAuthenticated,
    loading,
  };
};
