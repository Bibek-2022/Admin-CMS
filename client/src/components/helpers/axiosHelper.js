import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
const loginEP = loginRegisterEP + "/login";
const catEP = rootUrl + "/category";
const paymentMethodEP = rootUrl + "/payment-method";
const adminEP = rootUrl + "/admin";
const productEP = rootUrl + "/products";
const reviewEP = rootUrl + "/review";

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
