import { useSelector, useDispatch } from "react-redux";
import { getMyProfile } from "../store/slices/userSlice";

export const useUser = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      await dispatch(getMyProfile());
    } catch (error) {
      console.log("error", error);
    }
  };

  return { user, loading, error, getUser };
};
