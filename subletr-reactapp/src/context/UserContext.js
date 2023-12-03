import React, { createContext, useState, useEffect } from "react"
import { v4 as uuid } from 'uuid';
import { isLoggedIn } from '../api/api';
import { logoutCustomer } from '../api/api';
import { getUserListings } from "../api/api";
import { createListing as callCreateListing } from "../api/api";
export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [userId, setUserId] = useState();
    const [userListings, setUserListings] = useState([])
    const [viewedListings, setViewedListings] = useState([])
    const [rentalHistory, setRentalHistory] = useState([])


    useEffect(() => {
        if (userId)
            getMyListings()
    }, [userId])

    const createListing = async (data) => {
        const response = await callCreateListing(data)
        console.log(response)
    }

    const getMyListings = async () => {
        const listings = await getUserListings(userId)
        setUserListings(listings)
    }

    const getViewedListings = async () => {
        // const listings = await getViewedListings(userId)
        // setUserListings(listings)
        console.log('viewed')
    }

    const getRentalhistory = async () => {
        // const listings = await getViewedListings(userId)
        // setUserListings(listings)
        console.log('rental history')
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
                getRentalhistory,
                createListing,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}