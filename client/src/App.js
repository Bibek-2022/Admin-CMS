import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-registration/Login";
import Registration from "./pages/login-registration/Registration";
import { toast, ToastContainer } from "react-toastify";
import { EmailVerification } from "./pages/EmailVerification";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Categories from "./pages/Categories.js/Categories";
import Product from "./pages/products/Products";
import PaymentMethod from "./pages/paymentMethod/PaymentMethod";
import User from "./pages/users/User";
import Orders from "./pages/orders/Orders";
import Settings from "./pages/settings/Settings";
import AdminProfile from "./pages/admin-profile/AdminProfile";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/admin-verification" element={<EmailVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Product />} />
          <Route path="/paymentmethod" element={<PaymentMethod />} />
          <Route path="/users" element={<User />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
