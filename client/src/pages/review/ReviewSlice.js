import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  review: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (state, { payload }) => {
      state.review = payload;
    },
  },
});

const { actions, reducer } = reviewSlice;

export const { setReview } = actions;
export default reducer;
