import {
  fetchCategory,
  fetchPaymentMethods,
} from "../../components/helpers/axiosHelper";
import { setPaymentMethods } from "./paymentMethodSlice";
import { toast } from "react-toastify";
export const getPaymentMethodsAction = () => async (dispatch) => {
  const { status, result } = await fetchPaymentMethods();

  status === "success" && dispatch(setPaymentMethods(result));
};

// export const postCategoryAction = (obj) => async (dispatch) => {
//   const responsePromise = postCategory(obj);
//   toast.promise(responsePromise, { pending: "Wait" });

//   const { status, message } = await responsePromise;
//   toast[status](message);
//   status === "success" && dispatch(getPaymentMethodAction());
// };

// export const deleteCategoryAction = (obj) => async (dispatch) => {
//   const responsePromise = deleteCategories(obj);
//   toast.promise(responsePromise, { pending: "Wait" });

//   const { status, message } = await responsePromise;
//   toast[status](message);
//   status === "success" && dispatch(getCategoriesAction());
// };

// export const updateCategoryAction = (obj) => async (dispatch) => {
//   const responsePromise = updateCategory(obj);
//   toast.promise(responsePromise, { pending: "Please wait..." });
//   const { status, result } = await responsePromise;

//   toast[status](result);

//   status === "success" && dispatch(getCategoriesAction());
// };
