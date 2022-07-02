import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-registration/loginRegisterSlice";

const store = configureStore({
  reducer: {
    user: loginReducer,
  },
});

export default store;
