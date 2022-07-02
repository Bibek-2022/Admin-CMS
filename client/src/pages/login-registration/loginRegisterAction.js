import { loginAdminUser } from "../../components/helpers/axiosHelper";
import { setUser } from "./loginRegisterSlice";
import { toast } from "react-toastify";
export const loginAction = (obj) => async (dispatch) => {
  // show toastify spinner
  // call axios helper to make a request to the server
  const resultPromise = loginAdminUser(obj);

  toast.promise(resultPromise, {
    pending: "wait",
  });

  const { status, message, result } = await resultPromise;

  toast[status](message);
  console.log(result);
  // show toastify success or error
  // if response comes success then call setUser and pass user data
  status === "success" && dispatch(setUser(result));
};
