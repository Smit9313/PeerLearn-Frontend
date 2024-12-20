import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  console.log(user, isAuthenticated, loading);

  return {
    user,
    isAuthenticated,
    loading,
  };
};
