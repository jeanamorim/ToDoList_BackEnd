import axios from "axios";

const catApi = axios.create({
  baseURL: process.env.CATS_BASEURL,
});

export default catApi;
