import axios from "axios";
import { useState } from "react";
import { User } from "../utils/types";

const BASE_URL = "http://localhost:5000/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export type NewMessage = {
  message: string;
  sender: string | undefined;
  recipient: string | undefined;
};

type Data = {
  user: User,
  refreshToken?: string,
  accessToken?: string,
  conversation?: [],
  updatedImage?: {},
}

type Response = {
  data: Data | null,
  status: false,
  statusCode?: number,
  message: string,
}

type FetchData = {
  url: string,
  method: "get" | 'post' | "put" | 'patch' | 'delete'
  data?: {}
  headers?: {},
  params?: {},
  withCredentials?: boolean;
}

const useAxios = () => {
  const [response, setResponse] = useState<null | Response>(null);
  const [loading, setLaoding] = useState(false);

  const fetchData = async ({ url, method, headers = {}, data = {}, params = {}, withCredentials = false }: FetchData) => {
    setLaoding(true);

    try {
      const response = await axiosInstance({
        url, method, data, params, headers, withCredentials: withCredentials
      })
      setResponse(response.data)
      return response.data;
    }
    // here Catch clause variable type annotation must be 'any' or 'unknown' if specified
    catch (error: any) {
      setResponse({
        data: null,
        status: false,
        message: error.response ? error.response.data.message : "Something went wrong"
      });
    }
    finally {
      setLaoding(false);
    }
  }
  return { response, loading, fetchData }
}

export default useAxios;

