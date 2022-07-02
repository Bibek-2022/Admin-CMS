import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
const loginRegisterSlice = createSlice({
  name: "loginRegister",
  initialState,
  reducers: {
    // payload is data
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

const { reducer, actions } = loginRegisterSlice;

export const { setUser } = actions;
export default reducer;
