import React, { createContext, useState, useEffect } from "react"
import { getListings } from "../api/api";
import { editListing as callEditListing } from "../api/api";
import { rentAndStartPayingForListing } from "../api/api";

/**
 * The context for managing listings.
 * @type {React.Context}
 */
export const ListingsContext = createContext()

/**
 * The provider component for the ListingsContext.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components wrapped by the provider.
 * @returns {JSX.Element} The JSX element representing the ListingsProvider component.
 */
export const ListingsProvider = ({ children }) => {
    const [listings, setListings] = useState([]);
    const [listingsRowCount, setListingsRowCount] = useState(6);

    useEffect(() => {
        console.log("use effect")
        getAllListings();
    }, []);

    const getAllListings = async () => {
        const data = await getListings()
        setListings(data)
    }

    const calculateListingsPerPage = () => {
        const screenWidth = window.innerWidth
        if (screenWidth >= 1641) {
            return 4
        }
        else if (screenWidth >= 1226) {
            return 3
        } else if (screenWidth >= 816) {
            return 2
        } else {
            return 1
        }
    }

    const editListing = async (listingId, listingData) => {
        const response = await callEditListing(listingId, listingData)
        return response
    }

    const initiateRent = async (listingId) => {
        const response = await rentAndStartPayingForListing(listingId)
        if (response.url)
            window.location.href = response.url
    }

    const [listingsWidthFactor, setListingsWidthFactor] = useState(calculateListingsPerPage())

    useEffect(() => {
        const handleResize = () => {
          setListingsWidthFactor(calculateListingsPerPage());
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <ListingsContext.Provider
            value={{
                listings,
                setListings,
                listingsRowCount,
                setListingsRowCount,
                listingsWidthFactor,
                setListingsWidthFactor,
                getAllListings,
                editListing,
                initiateRent,
            }}
        >
            {children}
        </ListingsContext.Provider>
    )
}