import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-registration/Login";
import Registration from "./pages/login-registration/Registration";
import { toast, ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
