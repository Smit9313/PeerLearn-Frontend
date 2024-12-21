import { useSelector, useDispatch } from "react-redux";
import { getMyProfile, getUsersData } from "../store/slices/userSlice";

export const useUser = () => {
  const { user, users, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      await dispatch(getMyProfile());
    } catch (error) {
      console.log("error", error);
    }
  };

  const getUsers = async () => {
    try {
      await dispatch(getUsersData());
    } catch (error) {
      console.log("error", error);
    }
  };

  return { user, users, loading, error, getUser, getUsers };
};
