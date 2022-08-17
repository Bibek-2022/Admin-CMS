import { toast } from "react-toastify";
import {
  getProducts,
  getsingleProduct,
  postProducts,
  updateProduct,
} from "../../components/helpers/axiosHelper";
import { setProducts, setSelectedProduct } from "./productSlice";

export const fetchProductsAction = () => async (dispatch) => {
  const { status, message, products } = await getProducts();

  status === "success" && dispatch(setProducts(products));
};

export const fetchSingleProductAction = (_id) => async (dispatch) => {
  const { status, message, products } = await getsingleProduct(_id);

  status === "success" && dispatch(setSelectedProduct(products));
};

export const postProductsAction = (data) => async (dispatch) => {
  const responsePromise = postProducts(data);

  toast.promise(responsePromise, {
    pending: "Please wait...",
  });

  const { status, message } = await responsePromise;

  toast[status](message);

  status === "success" && dispatch(fetchProductsAction());
};

export const updateProductAction = (data, _id) => async (dispatch) => {
  const responsePromise = updateProduct(data);

  toast.promise(responsePromise, {
    pending: "Please wait...",
  });

  const { status, message } = await responsePromise;

  toast[status](message);

  status === "success" && dispatch(fetchSingleProductAction(_id));
};
