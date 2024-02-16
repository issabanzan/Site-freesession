import axios from "axios";

const loginUser = async (username) => {
  const backendBaseUrl = "https://api.freesession.net";

  const payload = { username, payload };

  const response = await axios.post(`${backendBaseUrl}/login`, payload);

  console.log("response", response);

  return response;
};

export { loginUser };
