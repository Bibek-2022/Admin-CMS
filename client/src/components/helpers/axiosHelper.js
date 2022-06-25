import axios from "axios";
const rootUrl = "http://localhost:3000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
export const apiProcessor = async (url, method, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
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
