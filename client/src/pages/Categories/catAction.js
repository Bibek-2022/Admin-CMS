import { fetchCategory } from "../../components/helpers/axiosHelper";
import { setCategories } from "./catSlice";

export const getCategoriesAction = (_id) => async (dispatch) => {
  const { status, result } = await fetchCategory(_id);

  status === "success" && dispatch(setCategories(result));
};
