import React, { createContext, useState, useEffect } from "react"
import { v4 as uuid } from 'uuid';
import { getListings } from "../api/api";
export const ListingsContext = createContext()

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

    // const generateRandomListings = () => {
    //     const sampleDescriptions = [
    //     'Spacious Apartment in Downtown',
    //     'Cozy Studio with Park View',
    //     '2BR Home Near the Beach',
    //     'Modern Loft with City Skyline',
    //     'Country House with Big Garden',
    //     'Urban Oasis Studio with City View',
    //     'Romantic Beachside Bungalow',
    //     'Stylish Downtown Loft Near Eateries',
    //     'Chic Countryside Cottage with Views',
    //     'Elegant Penthouse with Rooftop Pool',
    //     'Historical Home in Old Town',
    //     'Sleek Minimalist Apartment Downtown',
    //     'Vintage Bed and Breakfast with Charm',
    //     'Garden View Suite with Private Balcony',
    //     'Artistic Retreat Near Galleries',
    //     'Sunny Seaside Condo with Pool Access',
    //     'Retro Caravan in Hipster District',
    //     'Luxe Villa with Infinity Pool',
    //     'Family-Friendly Home with Play Area',
    //     'Countryside Chalet Near Hiking Trails',
    //     'Designer Condo with Modern Amenities',
    //     'Tranquil Getaway with Zen Garden',
    //     'Bright Top Floor Flat with Terrace',
    //     'Nautical-Themed Boat House',
    //     'Treehouse with Panoramic Forest Views',
    //     'Contemporary Studio in Art District',
    //     'Farmhouse Retreat with Animal Tours',
    //     'Lakeside Lodge with Boat Rentals',
    //     'Historical Manor with Secret Garden',
    //     'Downtown Duplex Steps from Nightlife',
    //     'Serene Sanctuary with Meditation Room',
    //     'Rustic Ranch with Horseback Riding',
    //     'Majestic Castle Overlooking the Vale',
    //     ];    
            
    //     const randomListings = Array.from({ length: 30 }).map(() => {
    //         const randomDescription = sampleDescriptions[Math.floor(Math.random() * sampleDescriptions.length)];
    //         console.log(randomDescription)
    //     const randomPrice = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    //     return {
    //         description: randomDescription,
    //         price: randomPrice,
    //         id: uuid()
    //     };
    //     });

    //     setListings(randomListings);
    // };

    return (
        <ListingsContext.Provider
            value={{
                listings,
                setListings,
                listingsRowCount,
                setListingsRowCount,
                listingsWidthFactor,
                setListingsWidthFactor,
            }}
        >
            {children}
        </ListingsContext.Provider>
    )
}