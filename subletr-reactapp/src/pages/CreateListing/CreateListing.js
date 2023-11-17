import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import Button from '@mui/material/Button'; // Import Button component from Material-UI
import './createListing.css';
import { useProgress } from './context.js';
import ProgressBar from './progressBar.js'; 
import InputBox from './inputBox';
import DropdownBox from './selectBox';

export default function CreateListing() {
    const { setProgress } = useProgress();
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        setProgress(20);
    }, [setProgress]);

    const handleNext = () => {
        // Navigate to the next page, replace '/next-route' with your desired route
        navigate('/listings/create/2');
    };

    const handleBack = () => {
        // Navigate to the previous page, replace '/previous-route' with your desired route
        navigate('/');
    };

    return (
        <div className="createListingContainer">
            <div className="leftContainer">
                <ProgressBar />
                <div className='content'>
                    <div className='inputs'>
                        <DropdownBox 
                            className="selectGeneral"
                            label="Select Option"
                            labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}
                            options={[
                                { label: 'Shared Accomodation', value: '1' },
                                { label: 'Shared Room', value: '2' },
                                { label: 'Whole Accomodation', value: '3' },
                            ]}
                        />
                        <DropdownBox 
                            className="selectGeneral"
                            label="How many people are you looking to subletting to?"
                            labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}
                            options={[
                                { label: '1', value: '1' },
                                { label: '2', value: '2' },
                                { label: '3', value: '3' },
                                { label: '4', value: '4' },
                                { label: '5', value: '5' },
                                { label: '6', value: '6' },
                                { label: '>=7', value: '7' },
                            ]}
                        />
                        <InputBox 
                            className="inputbox" 
                            label="What is the current occupancy?" 
                            labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}
                        />

                        {/* Navigation buttons */}
                        <div className='navigationButtons'>
                            <Button variant="contained" color="primary" onClick={handleBack}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext} style={{ marginLeft: '8px' }}>
                                Next
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="rightContainer"></div>
        </div>
    );
}
