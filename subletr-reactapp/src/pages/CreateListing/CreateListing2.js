import React, { useEffect } from 'react';
import './createListing.css';
import { useProgress } from './context.js';
import ProgressBar from './progressBar.js'; 

export default function CreateListing() {
    const { setProgress } = useProgress();

    useEffect(() => {
        setProgress(40);
    }, [setProgress]);

    return (
        <div className="createListingContainer">
            <div className="leftContainer">
                <ProgressBar /> {}
                <div className='content'></div>
            </div>
            <div className="rightContainer"></div>
        </div>
    );
}
