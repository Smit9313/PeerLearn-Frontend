import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../store/slices/authSlice";

export const useAuth = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = (userData) => {
    dispatch(setCredentials(userData));
  };

  return {
    user,
    userLogin,
    isAuthenticated,
    loading,
  };
};
