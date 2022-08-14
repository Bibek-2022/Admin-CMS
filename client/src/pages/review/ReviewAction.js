import { getProducts, getReview } from "../../components/helpers/axiosHelper";

import { setReview } from "./ReviewSlice";

export const fetchReviewsAction = () => async (dispatch) => {
  const { status, message, review } = await getReview();
  // console.log(status, review);
  status === "success" && dispatch(setReview(review));
};
