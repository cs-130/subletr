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

export const getUserListings = async (userId) => {
  try {
    const res = await axios.get(`/listings/${userId}`, { withCredentials: true });
    return res.data
  } catch (err) {
    console.log("Unable to logout user", err);
    return false;
  }
}

export const getListings = async () => {
  try {
    const res = await axios.get('/listings/', { withCredentials: true });
    return res.data
  } catch (err) {
    console.log("Unable to logout user", err);
    return false;
  }
}

export const getViewedListings = async (userId) => {
  try {
    const res = await axios.get(`/listings/${userId}/favorited`, { withCredentials: true });
    return res.data
  } catch (err) {
    console.log("Unable to logout user", err);
    return false;
  }
}

export const getRentalHistory = async (userId) => {
  try {
    const res = await axios.get(`/listings/${userId}/rental`, { withCredentials: true });
    return res.data
  } catch (err) {
    console.log("Unable to logout user", err);
    return false;
  }
}

export const callFavoriteListing = async (listing_id, userId) => {
  try {
    const res = await axios.post(`/listings/favorite`, {listingId: listing_id, userId: userId}, { withCredentials: true });
    return res
  } catch (err) {
    console.log("Unable to logout user", err);
    return false;
  }
}

export const isLoggedIn = async () => {
  try {
    const res = await axios.get("/auth/is-customer-logged-in", { withCredentials: true });
    return res.data
  } catch (err) {
    console.log("Error getting login status", err);
    return false;
  }
};

export const createListing = async (data, userId) => {
  try {
    const res = await axios.post("/listings/create-listing", {...data, userId: userId}, { withCredentials: true});
    return res.data
  } catch (err) {
    console.log("Error getting login status", err);
    return false;
  }
};


