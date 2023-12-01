import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from '@mui/material/Button'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import './createListing.css';
import ProgressBar from './progressBar.js'; 
import InputBox from './inputBox';
import { CreateListingContext } from '../../context/CreateListingProvider.js';
import './createListing.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


export default function CreateListing() {
    const {
        setProgress,
        featuresSelected,
        setFeaturesSelected,
        featureOptions,
        price, 
        setPrice,
    } = useContext(CreateListingContext);

    const navigate = useNavigate(); 

    useEffect(() => {
        setProgress(100);
    }, [setProgress]);

    const handleNext = () => {
        // Navigate to the next page
        // navigate('/listings/create/4');
        navigate('/');
    };

    const handleBack = () => {
        // Navigate to the previous page
        navigate('/listings/create/2');
    };

    return (
        <div className="page-height" style={{display: 'flex'}}>
            <div className="leftContainer">
                <ProgressBar />
                <div className='content'>
                    <div className='inputs'>
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px'  }}>
                            <label style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px', marginBottom: '8px'  }}>Select features...</label>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                value={featuresSelected}
                                isMulti
                                onChange={(e) => setFeaturesSelected(e)}
                                options={featureOptions}
                                styles={{}}
                            />
                        </div>

                        <div className="inputbox" style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px', position: 'relative' }}>
                            <label style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}>Lastly, how much do you want to list it for?</label>
                            <div className="input-price" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                <input className='inputboxGeneral' value={price}  placeholder='1000...' onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>
                        
                        {/* Navigation buttons */}
                        <div className='navigationButtons'>
                            <Button variant="contained" color="primary" onClick={handleBack}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext} style={{ marginLeft: '8px' }}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightContainer"></div>
        </div>
    );
}
