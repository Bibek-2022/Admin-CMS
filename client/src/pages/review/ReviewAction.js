import { getProducts, getReview } from "../../components/helpers/axiosHelper";

import { setReview } from "./ReviewSlice";

export const fetchReviewsAction = () => async (dispatch) => {
  const { status, message, products } = await getReview();

  status === "success" && dispatch(setReview(products));
};
