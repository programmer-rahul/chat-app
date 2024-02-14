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

// method,
//       url: `${Base_Url}/${url}`,
//       data: userData,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
