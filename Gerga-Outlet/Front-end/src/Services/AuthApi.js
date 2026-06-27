import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const registerUser = (data) => {
  return api.post("/auth/register", data);
};
