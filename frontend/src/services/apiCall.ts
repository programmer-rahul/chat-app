import axios, { AxiosResponse } from "axios";

const Base_Url = "http://localhost:5000/api/v1";

type MethodTypes = "get" | "post" | "put" | "patch" | "delete";

type ApiResponse<T> = {
  status: boolean;
  message: string;
  data: T | null;
  statusCode?: number;
};

const apiCall = async <T>(
  url: string,
  method: MethodTypes,
  userData?: any
): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url: `${Base_Url}/${url}`,
      data: userData,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    // console.log("axios response :- ", response);

    const { data, message, status } = await response.data;
    return {
      status,
      message,
      data,
    };
  } catch (error) {
    console.log("insider errors", error);
    if (!error.response) {
      return { status: false, message: "Internal Server Error", data: null };
    } else {
      return {
        status: false,
        message: error.response.data.message || "Error",
        data: null,
      };
    }
  }
};

export default apiCall;
