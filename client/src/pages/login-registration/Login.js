import React, { useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import { MainLayout } from "../../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { autoAdminLogin } from "./loginRegisterAction";

const Login = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.adminUser);

  useEffect(() => {
    !user._id && dispatch(autoAdminLogin());
  }, [user]);

  return (
    <MainLayout>
      <div className="reg-fo rm d-flex justify-content-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
};

export default Login;
