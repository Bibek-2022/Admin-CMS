import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-registration/loginRegisterSlice";
import systemReducer from "./pages/system-state/SystemSlice";
import categoryReducer from "./pages/Categories/catSlice";
import paymentMethodReducer from "./pages/paymentMethod/paymentMethodSlice";
import productReducer from "./pages/products/productSlice";
import orderReducer from "./pages/orders/OrderSlice";
import customerReducer from "./pages/users/customerSlice";
import reviewReducer from "./pages/review/ReviewSlice";
const store = configureStore({
  reducer: {
    adminUser: loginReducer,
    system: systemReducer,
    categories: categoryReducer,
    paymentMethod: paymentMethodReducer,
    products: productReducer,
    orders: orderReducer,
    customers: customerReducer,
    review: reviewReducer,
  },
});

export default store;
