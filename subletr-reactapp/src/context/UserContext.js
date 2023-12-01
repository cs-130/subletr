import React, { createContext, useState, useEffect } from "react"
import { v4 as uuid } from 'uuid';
import { isLoggedIn } from '../api/api';
import { logoutCustomer } from '../api/api';


export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [userId, setUserId] = useState();

    const isUserLoggedIn = async () => {
        const data = await isLoggedIn()
        if (data.loggedIn) {
            setUserId(data.id)
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
            }}
        >
            {children}
        </UserContext.Provider>
    )
}