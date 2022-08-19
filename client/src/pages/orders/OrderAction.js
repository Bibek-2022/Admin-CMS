import { setOrders } from "./OrderSlice";
import { setOrders } from "./orderSlice";

export const getOrderAction = (_id) => async (dispatch) => {
  //call the api

  const { status, orders } = await getOrders(_id);

  status === "success" && dispatch(setOrders(orders));
};
