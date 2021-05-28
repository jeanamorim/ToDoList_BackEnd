import axios from "axios";

const api = axios.create({
  baseURL: process.env.MAIL_BASEURL,
});

export default api;
