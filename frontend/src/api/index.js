import axios from "axios";

const config = () => {
  return {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
};

const API = axios.create({
  //baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000",
  baseURL: "http://localhost:5000",
  //baseURL: "http://10.0.19.207:5000",
});

const getEmployee = async (data) => {
  const response = await API.get("api/users/getemployee", config());
  return response.data;
};

const signin = async (loginData) => {
  console.log(loginData);
  const response = await API.post("api/users/login", loginData, config());
  return response.data;
};

const signup = async (data) => {
  const response = await API.post("api/users/register", data);
  return response.data;
};

const sendVerificationCode = async (data) => {
  const response = await API.post(
    "api/users/sendVerificationCode",
    data,
    config()
  );
  return response.data;
};

const submitVerficationCode = async (data) => {
  const response = await API.post(
    "api/users/submitVerificationCode",
    data,
    config()
  );
  return response.data;
};

const changePassword = async (data) => {
  const response = await API.post("api/users/resetPassword", data, config());
  return response.data;
};

const getProfile = async () => {
  const response = await API.get("api/users/profile", config());
  return response.data;
};
const viewallwells = async () => {
  const response = await API.get("api/users/viewallwells", config());
  return response.data;
};

const viewwell = async (newWellNo) => {
  const response = await API.get(`api/users/viewwell?newWellNo=${newWellNo}`);
  return response.data;
};

const addwell = async (data) => {
  const response = await API.post("api/users/addwell", data);
  return response.data;
};

const editwell = async (data) => {
  const response = await API.post("api/users/editwell", data);
  return response.data;
};

const removewell = async (data) => {
  const response = await API.post("api/users/removewell", data);
  return response.data;
};

const viewallusers = async () => {
  const response = await API.get("api/users/viewallusers", config());
  return response.data;
};
const edituser = async (data) => {
  const response = await API.post("api/users/edituser", data);
  return response.data;
};

const api = {
  signin,
  signup,
  submitVerficationCode,
  sendVerificationCode,
  changePassword,
  viewallwells,
  addwell,
  viewwell,
  removewell,
  editwell,
  viewallusers,
  edituser,
};
export default api;
