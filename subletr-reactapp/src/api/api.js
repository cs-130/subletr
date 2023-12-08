import axios from "axios";

// move to .env
const BACKEND_DOMAIN = "http://localhost:5000";

axios.defaults.baseURL = BACKEND_DOMAIN;

/**
 * Logs out the customer.
 * @returns {Promise<boolean>} A promise that resolves to true if the logout is successful, false otherwise.
 */
export const logoutCustomer = async () => {
  try {
    const res = await axios.get("/auth/logout", { withCredentials: true });
    if (res.status === 200) return true;
    return false;
  } catch (err) {
    console.log("Unable to logout user", err);
    return false;
  }
};

/**
 * Gets the listings associated with a user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<false|array>} A promise that resolves to an array of listings if successful,
 *    or false if there was an error.
 */
export const getUserListings = async (userId) => {
  try {
    const res = await axios.get(`/listings/${userId}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log("error getting user listings", err);
    return false;
  }
};

/**
 * Gets all the listings.
 * @returns {Promise<array|false>} A promise that resolves to an array of all listings if successful,
 *    or false if there was an error.
 */
export const getListings = async () => {
  try {
    const res = await axios.get("/listings/", { withCredentials: true });
    return res.data;
  } catch (err) {
    console.log("error getting listings", err);
    return false;
  }
};

/**
 * Gets the listings favorited by a user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<array|false>} A promise that resolves to an array of favorited listings if successful,
 *    or false if there was an error.
 */
export const getViewedListings = async (userId) => {
  try {
    const res = await axios.get(`/listings/${userId}/favorited`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log("error getting favorites", err);
    return false;
  }
};

/**
 * Gets the rental history of a user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<array|false>} A promise that resolves to an array of rental history if successful,
 *    or false if there was an error.
 */
export const getRentalHistory = async (userId) => {
  try {
    const res = await axios.get(`/listings/${userId}/rental`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log("error getting rental history", err);
    return false;
  }
};

/**
 * Calls the API to favorite a listing for a user.
 * @param {string} listingId - The ID of the listing.
 * @param {string} userId - The ID of the user.
 * @returns {Promise|false} A promise that resolves with the response object if successful,
 *    or false if there was an error.
 */
export const callFavoriteListing = async (listingId, userId) => {
  try {
    const res = await axios.post(
      `/listings/favorite`,
      { listingId: listingId, userId: userId },
      { withCredentials: true }
    );
    return res;
  } catch (err) {
    console.log("Unable to logout user", err);
    return false;
  }
};

/**
 * Checks if the customer is currently logged in.
 * @returns {Promise|false} A promise that resolves with the login status (true if logged in, false otherwise)
 *    or false if there was an error.
 */
export const isLoggedIn = async () => {
  try {
    const res = await axios.get("/auth/is-customer-logged-in", {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log("Error getting login status", err);
    return false;
  }
};

/**
 * Creates a new listing.
 * @param {object} data - The listing data.
 * @param {string} userId - The ID of the user.
 * @returns {Promise|false} A promise that resolves with the created listing if successful,
 *    or false if there was an error.
 */
export const createListing = async (data, userId) => {
  try {
    const res = await axios.post(
      "/listings/create-listing",
      { ...data, userId: userId },
      { withCredentials: true }
    );
    return res.data;
  } catch (err) {
    console.log("Error creating listing", err);
    return false;
  }
};

/**
 * Rents a listing and starts paying for it.
 * @param {string} listingId - The ID of the listing.
 * @returns {Promise|false} A promise that resolves with the data if successful,
 *    or false if there was an error.
 */
export const rentAndStartPayingForListing = async (listingId) => {
  try {
    const res = await axios.post(
      "/stripe/create-rent-subscription",
      {
        listingId: listingId,
      },
      { withCredentials: true }
    );
    if (res.status === 200) return res.data;
    return false;
  } catch (err) {
    console.log("Error in creating rent subscription", err);
    return false;
  }
};

/**
 * Deletes a listing.
 * @param {string} listingId - The ID of the listing to delete.
 * @returns {Promise|false} A promise that resolves with the data if successful,
 *    or false if there was an error.
 */
export const deletelisting = async (listingId) => {
  try {
    const res = await axios.post(
      "/listings/delete",
      { listing_id: listingId },
      { withCredentials: true }
    );
    return res.data;
  } catch (err) {
    console.log("Error deleting listing", err);
    return false;
  }
};

/**
 * Edits a listing.
 * @param {string} listingId - The ID of the listing to edit.
 * @param {object} listingData - The updated listing data.
 * @returns {Promise|void} A promise that resolves with the data if successful,
 *    otherwise, the function does not return anything.
 */
export const editListing = async (listingId, listingData) => {
  try {
    const res = await axios.post(
      "/listings/edit",
      { ...listingData, listing_id: listingId },
      { withCredentials: true }
    );
    return res.data;
  } catch (err) {
    console.log("Error deleting listing", err);
  }
};

/**
 * Calls the API to send a message.
 * @param {object} data - The message data.
 * @returns {Promise|false} A promise that resolves with the data if successful,
 *    or false if there was an error.
 */
export const callSaveMessage = async (data) => {
  try {
    const res = await axios.post(
      "/messages/save-message",
      {...data},
      { withCredentials: true }
    );
    console.log(data);
    return res.data;
  } catch (err) {
    console.log("Error saving message", err);
    return false;
  }
};

/**
 * Calls the API to get conversations.
 * @param {string} userId - The ID of the user.
 * @returns {Promise|false} A promise that resolves with the data if successful,
 *    or false if there was an error.
 */
export const getUserConversations = async (userId) => {
  try {
    const res = await axios.get(`/messages/${userId}/get-conversations`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log("Unable to get conversations", err);
    return false;
  }
};

/**
 * Gets the customer document.
 * @returns {Promise|false} A promise that resolves with the document if successful,
 *    or false if there was an error.
 */
export const getCustomerDocument = async () => {
  try {
    const res = await axios.get("/auth/get-customer", {
      withCredentials: true,
    });
    if (res.status === 200) return res.data;
    return false;
  } catch (err) {
    console.log("Error in getting customer doc", err);
    return false;
  }
};

/**
 * Calls the API to get messages.
 * @param {string} userId - The ID of the user.
 * @returns {Promise|false} A promise that resolves with the data if successful,
 *    or false if there was an error.
 */
export const getUserMessages = async (userId) => {
  try {
    const res = await axios.get(`/messages/${userId}/get-messages`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log("Unable to get messages", err);
    return false;
  }
};


/**
 * Calls the API to get usernames.
 * @param {string} userId - The ID of the user.
 * @returns {Promise|false} A promise that resolves with the data if successful,
 *    or false if there was an error.
 */
export const callGetUserName = async (userId) => {
  try {
    const res = await axios.get(`/messages/${userId}/get-username`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log("Unable to get username", err);
    return false;
  }
};