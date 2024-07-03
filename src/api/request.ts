import apiClient from ".";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestOptions extends AxiosRequestConfig {
  url: string;
  body?: any;
}

export const axiosGet = async <T>({
  url,
  ...customOptions
}: RequestOptions): Promise<T> => {
  const response = await apiClient.get(url, customOptions);
  return response.data;
};
