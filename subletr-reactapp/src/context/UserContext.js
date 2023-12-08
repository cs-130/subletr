import React, { createContext, useState, useEffect, useCallback } from "react"
import { isLoggedIn } from '../api/api';
import { logoutCustomer } from '../api/api';
import { getUserListings } from "../api/api";
import { getViewedListings as callGetViewed } from "../api/api";
import { getRentalHistory as callGetRental } from "../api/api";
import { createListing as callCreateListing } from "../api/api";
import { callFavoriteListing } from "../api/api";
import { deletelisting as callDeletelisting } from "../api/api";
import { callSendMessage} from "../api/api";
import { callGetConversations} from "../api/api";
import { callGetMessages} from "../api/api";

/**
 * The context for managing user-related data and functionality.
 * @type {React.Context}
 */
export const UserContext = createContext()

/**
 * The provider component for the UserContext.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components wrapped by the provider.
 * @returns {JSX.Element} The JSX element representing the UserProvider component.
 */
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState();
    const [userListings, setUserListings] = useState([])
    const [viewedListings, setViewedListings] = useState([])
    const [rentalHistory, setRentalHistory] = useState([])
    const [page, setPage] = useState(0)
    const [conversationIds, setConversationIds] = useState([])
    const [messages, setMessages] = useState([])

    const getMyListings = useCallback(async () => {
      const listings = await getUserListings(userId);
      setUserListings(listings);
    }, [userId]);

    useEffect(() => {
        if (userId) {
            getMyListings();
        }
    }, [userId, getMyListings])

    const createListing = async (data) => {
        const response = await callCreateListing(data, userId)
        return response.message
    }

    const getViewedListings = async () => {
        const listings = await callGetViewed(userId)
        console.log(listings)
        setViewedListings(listings)
    }

    const getRentalHistory = async () => {
        const listings = await callGetRental(userId)
        setRentalHistory(listings)
        // console.log('rental history')
    }

    const isUserLoggedIn = async () => {
        const data = await isLoggedIn()
        if (data.loggedIn) {
            setUserId(data.id)
            console.log("logged in: ", data.id)
        }
    }

    const logUserOut = async () => {
        const data = await logoutCustomer()
        if (data) {
            setUserId()
        }
        window.location.href = "/"
    }

    const favoriteListing = async (listing_id) => {
        if (userId) {
            await callFavoriteListing(listing_id, userId)
        }
    }

    const deleteListing = async (listingId) => {
        const response = await callDeletelisting(listingId)
        if (response.message === 'success')
            getMyListings(userId)
    }

    const sendMessage = async (data) => {
        const response = await callSendMessage(data, userId)
        return response.message
    }

    const getConversations = async () => {
        const conversations = await callGetConversations(userId)
        setConversationIds(conversations)
    }

    const getMessages = async (conversationId) => {
        const messages = await callGetMessages(conversationId)
        setMessages(messages)
    }

    return (
        <UserContext.Provider
            value={{
                userId,
                setUserId,
                isUserLoggedIn,
                logUserOut,
                userListings,
                setUserListings,
                viewedListings,
                setViewedListings,
                getMyListings,
                getViewedListings,
                rentalHistory,
                setRentalHistory,
                getRentalHistory,
                createListing,
                favoriteListing,
                page,
                setPage,
                deleteListing,
                sendMessage,
                getConversations,
                getMessages,
                conversationIds,
                messages
            }}
        >
            {children}
        </UserContext.Provider>
    )
}