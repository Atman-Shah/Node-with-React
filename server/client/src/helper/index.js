import axios from "axios";

export const fetchUser = async () => {
  const response = await axios.get("/api/current_user");
  return response;
};
