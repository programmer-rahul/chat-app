import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

const apiService = axios.create({
  baseURL: BASE_URL,
});

export const registerUser = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const response = await apiService.post("/user/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(response);
    return response?.data;
  } catch (err) {
    console.log("Error in axios call");
  }
};

export const getAllUsers = async () => {
  try {
    const response = await apiService("/user/all-users", {
      method: "get",
      withCredentials: true,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

type NewMessage = {
  messageText: string;
  sender: string | undefined;
  recipient: string | null;
};

export const sendMessage = async (data: NewMessage) => {
  try {
    const response = await apiService.post("/message/add-message", data, {
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
    const response = await apiService.get(`/message/get-conversation/${_id}`, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("Error");
  }
};
