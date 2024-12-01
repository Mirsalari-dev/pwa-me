import { API_URL } from "@/constant/baseUrls/baseUrls.constant";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Cookies } from "react-cookie";
import { IApi } from "./api.types";

const cookie = new Cookies();

class Api implements IApi {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly axios: AxiosInstance) {}
  get<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.get<T>(url, config);
  }
  post<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.post<T>(url, body, config);
  }
  delete<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.delete<T>(url, config);
  }
  put<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.put<T>(url, body, config);
  }
  patch<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.patch<T>(url, body, config);
  }

  defaults = this.axios.defaults;
}

export const createAxiosInstance = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  instance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${cookie.get("token")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    async (response: AxiosResponse) => {
      return response;
    },
    async (err) => {
      const originalConfig = err.config;
      if (err.message === "Network Error") {
        // toast.error("لطفا اتصال به اینترنت را چک بفرمایید.");
      }
      if (originalConfig.url !== "/auth/send-otp" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          cookie.remove("token", { path: "/" });
          cookie.remove("userInfo", { path: "/" });
          // toast.error("نشست شما غیر فعال شده است، لطفا مجددا وارد شوید.");
          window.location.href = window.location.origin;
        }
      }
      return Promise.reject(err);
    }
  );
  return instance;
};

const apiClient = new Api(createAxiosInstance(API_URL));

export default apiClient;
