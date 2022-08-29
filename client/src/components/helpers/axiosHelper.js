import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
const loginEP = loginRegisterEP + "/login";
const catEP = rootUrl + "/category";
const paymentMethodEP = rootUrl + "/payment-method";
const adminEP = rootUrl + "/admin";
const productEP = rootUrl + "/products";
const customerEp = rootUrl + "/customers";
const reviewEP = rootUrl + "/review";
const orderEP = rootUrl + "/orders";

const apiProcessor = async ({ method, url, data, privateAPI, token }) => {
  try {
    const headers = privateAPI
      ? {
          Authorization: token || sessionStorage.getItem("accessJWT"),
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
    let message = error.message;

    // 200, 401, 403

    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");

      return { status: "error", message: "Unauthenticated" };
    }

    if (error.response && error.response.data) {
      message = error.response.data.message;
    }

    if (message === "jwt expired") {
      const token = await requestNewAccessJWT();

      return apiProcessor({ method, url, data, privateAPI, token });
    }

    console.log(error);
    return {
      status: "error",
      message,
    };
  }
};

export const postAdminUser = (obj) => {
  const option = {
    method: "post",
    url: loginRegisterEP,
    data: obj,
    privateAPI: false,
  };

  // return apiProcessor("post", loginEP, obj);
  return apiProcessor(option);
};
export const emailVerificationAdminUser = (obj) => {
  // return apiProcessor("patch", loginRegisterEP, obj);

  const option = {
    method: "patch",
    url: loginRegisterEP,
    data: obj,
    privateAPI: false,
  };

  // return apiProcessor("post", loginEP, obj);
  return apiProcessor(option);
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

export const postCategory = (data) => {
  const option = {
    method: "post",
    url: catEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const deleteCategories = (data) => {
  const option = {
    method: "delete",
    url: catEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const updateCategory = (data) => {
  const option = {
    method: "put",
    url: catEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

// ----------------------Payment Method API--------------------------------//

// ===== payment methods
export const fetchPaymentMethods = () => {
  const option = {
    method: "get",
    url: paymentMethodEP,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const postPaymentMethod = (data) => {
  const option = {
    method: "post",
    url: paymentMethodEP,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};

export const deletePaymentMethod = (_id) => {
  const option = {
    method: "delete",
    url: paymentMethodEP + "/" + _id,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const updatePaymentMethod = (data) => {
  const option = {
    method: "put",
    url: paymentMethodEP,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};
// ----------------------Admin User --------------------------------//

export const updateAdminPassword = (data) => {
  const option = {
    method: "patch",
    url: adminEP,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};

export const updateAdminProfile = (data) => {
  const option = {
    method: "put",
    url: adminEP,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};
export const getAdminUser = () => {
  const option = {
    method: "get",
    url: adminEP,
    privateAPI: true,
  };

  return apiProcessor(option);
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
export const getsingleProduct = (_id) => {
  const option = {
    method: "get",
    url: productEP + "/" + _id,
    privateAPI: true,
  };

  return apiProcessor(option);
};

export const postProducts = (data) => {
  const option = {
    method: "post",
    url: productEP,
    privateAPI: true,
    data,
  };

  return apiProcessor(option);
};

export const deleteProduct = (_id) => {
  const option = {
    method: "delete",
    url: productEP + "/" + _id,
    privateAPI: true,
  };

  return apiProcessor(option);
};

export const updateProduct = (data) => {
  const option = {
    method: "put",
    url: productEP,
    privateAPI: true,
    data,
  };

  return apiProcessor(option);
};

// ========= JWT Api
export const requestNewAccessJWT = async () => {
  const option = {
    method: "get",
    url: adminEP + "/accessjwt",
    privateAPI: true,
    token: localStorage.getItem("refreshJWT"),
  };

  const { accessJWT } = await apiProcessor(option);
  sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
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

// ==== customer api
export const getCustomers = async (_id) => {
  const option = {
    method: "get",
    url: _id ? customerEp + "/" + _id : customerEp,
    privateAPI: true,
  };

  return apiProcessor(option);
};

// ==== order api
export const getOrders = async (_id) => {
  const option = {
    method: "get",
    url: _id ? orderEP + "/" + _id : orderEP,
    privateAPI: true,
  };

  return apiProcessor(option);
};
