import axios, { AxiosRequestConfig } from "axios";
import { Genre } from "../hooks/useGenres";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2ed3445ebce44ff1b7f8cc7119bd151c",
  },
});

class ApiClient<T> {
  constructor(public endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
