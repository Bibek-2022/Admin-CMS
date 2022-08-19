import { getOrders } from "../../components/helpers/axiosHelper";
import { setOrders } from "./OrderSlice";

export const getOrderAction = (_id) => async (dispatch) => {
  //call the api

  const { status, orders } = await getOrders(_id);

  status === "success" && dispatch(setOrders(orders));
};
