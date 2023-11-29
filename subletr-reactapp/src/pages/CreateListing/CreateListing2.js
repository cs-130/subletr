import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from '@mui/material/Button'; 
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import './createListing.css';
import { useProgress } from './context.js';
import ProgressBar from './progressBar.js'; 
import InputBox from './inputBox';
import DropdownBox from './selectBox';

export default function CreateListing() {
    const { setProgress } = useProgress();
    const navigate = useNavigate(); 
    const [startDate, setStartDate] = useState(new Date()); 

    useEffect(() => {
        setProgress(40);
    }, [setProgress]);

    const handleNext = () => {
        // Navigate to the next page
        navigate('/listings/create/3');
    };

    const handleBack = () => {
        // Navigate to the previous page
        navigate('/listings/create/1');
    };

    return (
        <div className="page-height" style={{display: 'flex'}}>
            <div className="leftContainer">
                <ProgressBar />
                <div className='content'>
                    <div className='inputs'>
                        <InputBox 
                            className="inputbox" 
                            label="Upload four images of your place, please!" 
                            labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}
                        />
                        {/* Date Picker input */}
                        <div style={{ marginBottom: '50px' }}>
                            <label style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px', display: 'block' }}>
                                Select dates a tenant could stay.
                            </label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="dates"
                            />
                        </div>
                        
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
