import React, { useEffect } from 'react';
import './createListing.css';
import { useProgress } from './context.js';
import ProgressBar from './progressBar.js'; 
import InputBox from './inputBox';
import DropdownBox from './selectBox';

export default function CreateListing() {
    const { setProgress } = useProgress();

    useEffect(() => {
        setProgress(20);
    }, [setProgress]);

    return (
        <div className="createListingContainer">
            <div className="leftContainer">
                <ProgressBar /> {}
                <div className='content'>
                    <div className='inputs'>
                        <DropdownBox className="selectGeneral"
                        label="Select Option"
                        labelStyle={{  fontFamily: 'Roboto, sans-serif',  fontSize: '24px'}}
                        options={[
                            { label: 'Shared Accomodation', value: '1' },
                            { label: 'Shared Room', value: '2' },
                            { label: 'Whole Accomodation', value: '3' },

                        ]}
                        />

                        <InputBox className="inputbox" label="How many heads are you subletting for?" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px'}}> </InputBox>
                        <InputBox className="inputbox" label="What is the current occupancy?" labelStyle={{ fontFamily: 'Roboto, sans-serif',  fontSize: '24px'}}> </InputBox>
                    </div>

                </div>
            </div>
            <div className="rightContainer"></div>
        </div>
    );
}
