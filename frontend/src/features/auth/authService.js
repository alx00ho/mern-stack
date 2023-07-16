import axios from "axios";

const API_URL_REGISTER = "api/users/register";

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData);

  console.log(response.data);

  if (response.data) {
    localStorage.setItem(JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
