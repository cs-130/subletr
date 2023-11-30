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
import BlankBox from './blankBox.js';


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };


export default function CreateListing() {
    const { setProgress } = useProgress();
    const navigate = useNavigate(); 
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date()); 

    
    const [images, setImages] = useState([])
    
    const handleSetEndDate = (date) => {
        if (date > startDate) {
            setEndDate(date)
        }
        else    
            return false
    }

    const handleSetStartDate = (date) => {
        if (date > endDate) {
            setEndDate(date)
        }
        setStartDate(date)
    }

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

    const handleFileUpload = (e) => {
        console.log(e.target.files)
        if (e.target.files.length)
            setImages(prev => [...prev, ...Array.from(e.target.files).map((file) => { return { ...file, preview: URL.createObjectURL(file) } })]);

    }

    console.log(images)

    const thumbs = images.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
              onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
          </div>
        </div>
      ));

    return (
        <div className="page-height" style={{display: 'flex'}}>
            <div className="leftContainer">
                <ProgressBar />
                <div className='content'>
                    <div className='inputs'>
                        <BlankBox 
                            className="" 
                            label="Upload four images of your place, please!" 
                            labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}
                            contents={
                                <div className="dropzone-parent">
                                    <label for="dropzone-file" className="dropzone-label">
                                        <div className="dropzone-div ">
                                            <svg className="dropzone-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                            </svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" style={{display: "none"}} multiple={true} accept="image/*" onChange={(file) => handleFileUpload(file)}/>
                                    </label>
                                </div> 
                            }
                        />
                        <aside style={thumbsContainer}>
                            {thumbs}
                        </aside>
                        {/* Date Picker input */}
                        <div style={{ marginBottom: '50px' }}>
                            <label style={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px'}}>
                                Select dates a tenant could stay.
                            </label>
                            <div style={{display: 'flex'}}>
                                <DatePicker
                                    id='start'
                                    selected={startDate}
                                    onChange={(date) => handleSetStartDate(date)}
                                    className="dates"
                                />
                                <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                    until
                                </div> 
                                <DatePicker
                                    id='end'
                                    selected={endDate}
                                    onChange={(date) => handleSetEndDate(date)}
                                    className="dates"
                                />
                            </div>
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
