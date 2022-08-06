import { getProducts } from "../../components/helpers/axiosHelper";
import { setProducts } from "./productSlice";

export const fetchProductsAction = () => async (dispatch) => {
  const { status, message, products } = await getProducts();

  status === "success" && dispatch(setProducts(products));
};
