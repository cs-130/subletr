import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from '@mui/material/Button'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import './createListing.css';
import { useProgress } from './context.js';
import ProgressBar from './progressBar.js'; 
import InputBox from './inputBox';

export default function CreateListing() {
    const { setProgress } = useProgress();
    const navigate = useNavigate(); 

    useEffect(() => {
        setProgress(80);
    }, [setProgress]);

    const handleNext = () => {
        // Navigate to the next page
        navigate('/listings/create/5');
    };

    const handleBack = () => {
        // Navigate to the previous page
        navigate('/listings/create/3');
    };

    return (
        <div className="page-height" style={{display: 'flex'}}>
            <div className="leftContainer">
                <ProgressBar />
                <div className='content'>
                    <div className='inputs'>
                        <InputBox 
                            className="inputbox" 
                            label="Write a short biography renters can read!" 
                            labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}
                        />
                        <InputBox 
                            className="inputbox" 
                            label="Phone numbers of current tenants?" 
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
