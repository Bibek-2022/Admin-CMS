import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomers: (state, { payload }) => {
      state.customers = payload;
    },
  },
});

const { actions, reducer } = customerSlice;

export const { setCustomers } = actions;

export default reducer;
