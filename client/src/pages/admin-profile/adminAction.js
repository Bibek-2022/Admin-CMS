import { toast } from "react-toastify";
import { updateAdminProfile } from "../../components/helpers/axiosHelper";
import { setUser } from "../login-registration/loginRegisterSlice";

export const updateAdminProfileAction = (obj) => async (dispatch) => {
  const resultPromise = updateAdminProfile(obj);
  toast.promise(resultPromise, { pending: "Please wait" });
  const { status, message, user } = await resultPromise;
  toast[status](message);

  status === "success" && setUser(user);
};
