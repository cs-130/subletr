import React, { createContext, useState, useEffect } from "react"
import { v4 as uuid } from 'uuid';
import { isLoggedIn } from '../api/api';
import { logoutCustomer } from '../api/api';
import { getUserListings } from "../api/api";
import { getViewedListings as callGetViewed } from "../api/api";
import { getRentalHistory as callGetRental } from "../api/api";
import { createListing as callCreateListing } from "../api/api";
import { callFavoriteListing } from "../api/api";
import { deletelisting as callDeletelisting } from "../api/api";
export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [userId, setUserId] = useState();
    const [userListings, setUserListings] = useState([])
    const [viewedListings, setViewedListings] = useState([])
    const [rentalHistory, setRentalHistory] = useState([])
    const [page, setPage] = useState(0)


    useEffect(() => {
        if (userId)
            getMyListings()
    }, [userId])

    const createListing = async (data) => {
        const response = await callCreateListing(data, userId)
        return response.message
    }

    const getMyListings = async () => {
        const listings = await getUserListings(userId)
        setUserListings(listings)
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
    }

    const favoriteListing = async (listing_id) => {
        if (userId) {
            const response = await callFavoriteListing(listing_id, userId)
        }
    }

    const deleteListing = async (listingId) => {
        const response = await callDeletelisting(listingId)
        if (response.message == 'success')
            getMyListings(userId)
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
            }}
        >
            {children}
        </UserContext.Provider>
    )
}