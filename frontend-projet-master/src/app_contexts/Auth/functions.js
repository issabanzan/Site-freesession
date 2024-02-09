import axios from "axios";

const loginUser = async (username) => {
  const backendBaseUrl = "http://projet_server:4000";

  const payload = { username, payload };

  const response = await axios.post(`${backendBaseUrl}/login`, payload);

  console.log("response", response);

  return response;
};

export { loginUser };
