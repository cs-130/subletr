import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import Button from '@mui/material/Button'; // Import Button component from Material-UI
import './createListing.css';
import ProgressBar from './progressBar.js'; 
import InputBox from './inputBox';
import DropdownBox from './selectBox';
import { CreateListingContext } from '../../context/CreateListingProvider.js';
import Select from 'react-select';

export default function CreateListing() {
    const {
        setProgress,
        accomidationOptions,
        accomidationSelected,
        setAccomidationSelected,
        subletCountOptions,
        subletCountSelected,
        setSubletCountSelected,
        address,
        setAddress,
    } = useContext(CreateListingContext);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        setProgress(33);
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
        <div className="page-height" style={{display: 'flex'}}>
            <div className="leftContainer">
                <ProgressBar />
                <div className='content'>
                    <div className='inputs'>
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px'  }}>
                            <label style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px', marginBottom: '8px' }}>Room Type</label>
                            <Select
                                value={accomidationSelected}
                                onChange={(e) => setAccomidationSelected(e)}
                                options={accomidationOptions}
                                styles={{}}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px'  }}>
                            <label style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px', marginBottom: '8px' }}>Number of subletters</label>
                            <Select
                                value={subletCountSelected}
                                onChange={(e) => setSubletCountSelected(e)}
                                options={subletCountOptions}
                                styles={{}}
                            />
                        </div>
                        <InputBox 
                            className="inputbox" 
                            label="Accommodation Address" 
                            labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        {/* Navigation buttons */}
                        <div className='navigationButtons'>
                            <Button variant="contained" color="primary" onClick={handleBack}>
                                Cancel
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
