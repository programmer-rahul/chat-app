import axios from "axios";
import { useState } from "react";
import { User } from "../utils/types";

const BASE_URL = "http://localhost:5000/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance("/user/all-users", {
      method: "get",
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export type NewMessage = {
  message: string;
  sender: string | undefined;
  recipient: string | undefined;
};

export const sendMessage = async (data: NewMessage) => {
  try {
    const response = await axiosInstance.post("/message/add-message", data, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Error");
  }
};

export const getCurrentConversation = async (_id: string | undefined) => {
  try {
    const response = await axiosInstance.get(`/message/get-conversation/${_id}`, {
      withCredentials: true,
    });
    // console.log(response);
    return response.data;
  } catch (err) {
    console.log("Error");
  }
};

export const updateProfileImage = async (profile) => {
  try {
    const response = await axiosInstance.put("/user/update-profile", profile, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Error", err);
  }
};






// from there
type Data = {
  user: User,
  refreshToken?: string,
  accessToken?: string,
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
    catch (error: AxiosError) {
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

