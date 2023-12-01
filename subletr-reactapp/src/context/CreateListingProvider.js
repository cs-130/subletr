import React, { createContext, useState, useEffect } from "react"
import { v4 as uuid } from 'uuid';

export const CreateListingContext = createContext()

export const CreateListingProvider = ({ children }) => {

    const [images, setImages] = useState([])
    const [progress, setProgress] = useState(0);
    const [accomidationSelected, setAccomidationSelected] = useState(0)
    const [subletCountSelected, setSubletCountSelected] = useState(0)
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date()); 
    const [featuresSelected, setFeaturesSelected] = useState([])
    const [address, setAddress] = useState('')
    const [price,  setPrice ] = useState()

    const accomidationOptions = [
        { label: 'Shared Accomodation', value: 'Shared Accomodation' },
        { label: 'Shared Room', value: 'Shared Room' },
        { label: 'Whole Accomodation', value: 'Whole Accomodation' },
    ]

    const subletCountOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '>=7', value: '>=7' },
    ]

    const featureOptions = [
        { label: 'Dishwasher', value: 'Dishwasher' },
        { label: 'Gym', value: 'Gym' },
        { label: 'Balcony', value: 'Balcony' },
    ]


    return (
        <CreateListingContext.Provider
            value={{
                images,
                setImages,
                progress,
                setProgress,
                accomidationOptions,
                accomidationSelected,
                setAccomidationSelected,
                subletCountOptions,
                subletCountSelected,
                setSubletCountSelected,
                startDate,
                setStartDate,
                endDate,
                setEndDate,
                featuresSelected,
                setFeaturesSelected,
                featureOptions,
                address,
                setAddress,
                price, 
                setPrice,
            }}
        >
            {children}
        </CreateListingContext.Provider>
    )
}