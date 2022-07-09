import {
  deleteCategories,
  fetchCategory,
  postCategory,
} from "../../components/helpers/axiosHelper";
import { setCategories } from "./catSlice";
import { toast } from "react-toastify";
export const getCategoriesAction = (_id) => async (dispatch) => {
  const { status, result } = await fetchCategory(_id);

  status === "success" && dispatch(setCategories(result));
};

export const postCategoryAction = (obj) => async (dispatch) => {
  const responsePromise = postCategory(obj);
  toast.promise(responsePromise, { pending: "Wait" });

  const { status, message } = await responsePromise;
  toast[status](message);
  status === "success" && dispatch(getCategoriesAction());
};

export const deleteCategoryAction = (obj) => async (dispatch) => {
  const responsePromise = deleteCategories(obj);
  toast.promise(responsePromise, { pending: "Wait" });

  const { status, message } = await responsePromise;
  toast[status](message);
  status === "success" && dispatch(getCategoriesAction());
};