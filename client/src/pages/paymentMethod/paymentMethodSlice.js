import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethods: [],
};

const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    setPaymentMethods: (state, { payload }) => {
      state.paymentMethods = payload;
    },
  },
});

const { actions, reducer } = paymentMethodSlice;
export const { setPaymentMethods } = actions;

export default reducer;
