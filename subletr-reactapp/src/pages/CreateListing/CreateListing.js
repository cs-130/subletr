import React, { useEffect, useContext } from 'react';
import './createListing.css';
import Form from '../../components/Form.js'
import { UserContext } from '../../context/UserContext.js';

export default function CreateListing() {

  const {
    userId
  } = useContext(UserContext)

  useEffect(() => {
    if (!userId) 
        window.location.href = `http://localhost:5000/auth/google`
  }, [])

    return (
      <div className="createListingContainer">
        {/* <div className="center"> */}
          <Form/>
        {/* </div> */}
      </div>
    );
}
