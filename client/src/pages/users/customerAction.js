import { getCustomers } from "../../components/helpers/axiosHelper";
import { setCustomers } from "./customerSlice";

export const getCustomersAction = () => async (dispatch) => {
  //call the api

  const { status, customers } = await getCustomers();

  status === "success" && dispatch(setCustomers(customers));
};
