import axios from "axios";

// move to .env
const BACKEND_DOMAIN = "http://localhost:5000";

axios.defaults.baseURL = BACKEND_DOMAIN;

export const logoutCustomer = async () => {
  try {
    const res = await axios.get("/auth/logout", { withCredentials: true });
    if (res.status == 200) return true;
    return false;
  } catch (err) {
    console.log("Unable to logout user", err);
    return false;
  }
};
