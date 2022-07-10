import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
  showModel: true,
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    toggleShowSideMenu: (state) => {
      state.showSideMenu = !state.showSideMenu;
    },
    toggleShowModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { toggleShowSideMenu, toggleShowModal } = actions;

export default reducer;
