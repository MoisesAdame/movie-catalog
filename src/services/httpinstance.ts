import Config from "../config";
import axios from "axios";

export const httpInstance = axios.create({
  baseURL: Config.API_URL,
});

httpInstance.interceptors.request.use(
    async ( config ) => {
    const newConfig = {...config};
    // newConfig.headers.["X-Version"] = "1.0.0";
    // newConfig.headers.["X-Signature"] = demoToken;
    return newConfig;
  },
  (error) => {
    // console.log
    return Promise.reject(error);
  }
);

httpInstance.interceptors.response.use(
  async (response) => {
    // console.log
    return response;
  },
  (error) => {
    // console.log
    return Promise.reject(error);
  }
);
