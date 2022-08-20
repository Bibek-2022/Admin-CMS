import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-registration/Login";
import Registration from "./pages/login-registration/Registration";
import { toast, ToastContainer } from "react-toastify";
import { EmailVerification } from "./pages/EmailVerification";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/products/Products";
import PaymentMethod from "./pages/paymentMethod/PaymentMethod";
import User from "./pages/users/User";
import Orders from "./pages/orders/Orders";
import Settings from "./pages/settings/Settings";
import AdminProfile from "./pages/admin-profile/AdminProfile";
import { ResetPassword } from "./pages/resetPassword.js/ResetPassword";
import { PrivateRouter } from "./components/private-route/PrivateRouter";
import { NewProduct } from "./pages/products/NewProduct";
import { Review } from "./pages/review/Review";
import { EditProductForm } from "./components/product-form/EditProductForm";
import EditProduct from "./pages/products/EditProduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/admin-verification" element={<EmailVerification />} />
          <Route path="/password-reset" element={<ResetPassword />} />

          {/* private routes TODO */}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/categories"
            element={
              <PrivateRouter>
                <Categories />
              </PrivateRouter>
            }
          />
          <Route
            path="/products/new"
            element={
              <PrivateRouter>
                <NewProduct />
              </PrivateRouter>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />
          <Route
            path="/products/edit/:_id"
            element={
              <PrivateRouter>
                <EditProduct />
              </PrivateRouter>
            }
          />
          <Route
            path="/paymentmethod"
            element={
              <PrivateRouter>
                <PaymentMethod />
              </PrivateRouter>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRouter>
                <User />
              </PrivateRouter>
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRouter>
                <Orders />
              </PrivateRouter>
            }
          />
          <Route
            path="/admin-profile"
            element={
              <PrivateRouter>
                <AdminProfile />
              </PrivateRouter>
            }
          />

          <Route
            path="/review"
            element={
              <PrivateRouter>
                <Review />
              </PrivateRouter>
            }
          />

          <Route
            path="/settings"
            element={
              <PrivateRouter>
                <Settings />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
