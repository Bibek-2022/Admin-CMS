import {
  getAdminUser,
  loginAdminUser,
  requestNewAccessJWT,
} from "../../components/helpers/axiosHelper";
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
export const fetchUser = () => async (dispatch) => {
  const { status, user } = await getAdminUser();

  status === "success" && dispatch(setUser(user));
};

export const autoAdminLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  //if accessJWT exist, fetch user and mount user in our redux store
  //else
  // if refreshJWT exist, fetch new accessJWT and then fetch the user and mount  user in our redux store

  if (accessJWT) {
    dispatch(fetchUser());
  } else if (refreshJWT) {
    const token = await requestNewAccessJWT();

    token ? dispatch(fetchUser()) : dispatch(adminLogout());
  } else {
    dispatch(adminLogout());
  }
};
