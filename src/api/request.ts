import apiClient from ".";
import type { AxiosRequestConfig } from "axios";

interface RequestOptions extends AxiosRequestConfig {
  url: string;
  body?: any;
}

export const axiosGet = async ({ url, ...customOptions }: RequestOptions) => {
  const response = await apiClient.get(url, customOptions);
  return response.data;
};

export const axiosPost = async ({ url, ...customOptions }: RequestOptions) => {
  const response = await apiClient.post(url, customOptions.body, customOptions);
  return response.data;
};

export const axiosPatch = async ({ url, ...customOptions }: RequestOptions) => {
  const response = await apiClient.patch(
    url,
    customOptions.body,
    customOptions
  );
  return response.data;
};

export const axiosDelete = async ({
  url,
  ...customOptions
}: RequestOptions) => {
  const response = await apiClient.delete(url, customOptions);
  return response.data;
};
