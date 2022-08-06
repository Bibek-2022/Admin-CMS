import { loginAdminUser } from "../../components/helpers/axiosHelper";
import { setUser } from "./loginRegisterSlice";
import { toast } from "react-toastify";
export const loginAction = (obj) => async (dispatch) => {
  const resultPromise = loginAdminUser(obj);

  toast.promise(resultPromise, {
    pending: "Please wait ....",
  });

  const { status, message, result, accessJWT, refreshJWT } =
    await resultPromise;

  toast[status](message);

  if (status === "success") {
    dispatch(setUser(result));

    sessionStorage.setItem("accessJWT", accessJWT);
    localStorage.setItem("refreshJWT", refreshJWT);
  }
};

export const adminLogout = () => (dispatch) => {
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  dispatch(setUser({}));
};
