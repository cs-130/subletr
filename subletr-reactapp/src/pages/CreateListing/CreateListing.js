import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import Button from '@mui/material/Button'; // Import Button component from Material-UI
import './createListing.css';
import { useProgress } from './context.js';
import ProgressBar from './progressBar.js'; 
import InputBox from './inputBox';
import DropdownBox from './selectBox';

import Form from '../../components/Form.js'

export default function CreateListing() {
    return (
      <div className="createListingContainer">
        {/* <div className="center"> */}
          <Form/>
        {/* </div> */}
      </div>
    );
}
