import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://gingers-blog.herokuapp.com/api/",
});
