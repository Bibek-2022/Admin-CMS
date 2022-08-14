import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
const loginEP = loginRegisterEP + "/login";
const catEP = rootUrl + "/category";
const paymentMethodEP = rootUrl + "/payment-method";
const adminEP = rootUrl + "/admin";
const productEP = rootUrl + "/products";
const reviewEP = rootUrl + "/review";

const apiProcessor = async ({ method, url, data, privateAPI }) => {
  try {
    const headers = privateAPI
      ? {
          Authorization: sessionStorage.getItem("accessJWT"),
        }
      : null;
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postAdminUser = (obj) => {
  return apiProcessor("post", loginRegisterEP, obj);
};
export const emailVerificationAdminUser = (obj) => {
  return apiProcessor("patch", loginRegisterEP, obj);
};

export const loginAdminUser = (obj) => {
  const option = {
    method: "post",
    url: loginEP,
    data: obj,
    privateAPI: false,
  };

  // return apiProcessor("post", loginEP, obj);
  return apiProcessor(option);
};

// ----------------------Category API--------------------------------//

export const fetchCategory = (_id) => {
  const url = _id ? catEP + "/" + _id : catEP;
  const option = {
    method: "get",
    url: url,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const postCategory = (obj) => {
  const option = {
    method: "post",
    url: catEP,
    obj,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const deleteCategories = (obj) => {
  const option = {
    method: "delete",
    url: catEP,
    obj,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const updateCategory = (obj) => {
  const option = {
    method: "put",
    url: catEP,
    obj,
    privateAPI: true,
  };
  return apiProcessor(option);
};

// ----------------------Payment Method API--------------------------------//

export const fetchPaymentMethods = () => {
  return apiProcessor("get", paymentMethodEP);
};

export const postPaymentMethod = (obj) => {
  return apiProcessor("post", paymentMethodEP, obj);
};

export const deletePaymentMethod = (_id) => {
  return apiProcessor("delete", paymentMethodEP + "/" + _id);
};

export const updatePaymentMethod = (obj) => {
  return apiProcessor("put", paymentMethodEP, obj);
};

// ----------------------Admin User --------------------------------//

export const updateAdminPassword = (obj) => {
  return apiProcessor("patch", adminEP, obj);
};

export const updateAdminProfile = (obj) => {
  return apiProcessor("put", adminEP, obj);
};

// ----------------Password reset

export const requestOTP = (obj) => {
  return apiProcessor("post", loginRegisterEP + "/otp-request", obj);
};

export const resetPassword = (obj) => {
  return apiProcessor("patch", loginRegisterEP + "/password", obj);
};

// -------------------Product----------------------//

export const getProducts = () => {
  const option = {
    method: "get",
    url: productEP,
    data: null,
    privateAPI: true,
  };

  return apiProcessor(option);
};

// -------------------Review----------------------//

export const getReview = () => {
  const option = {
    method: "get",
    url: reviewEP,
    data: null,
    privateAPI: true,
  };

  return apiProcessor(option);
};
