import React, { useEffect, useContext } from 'react';
import './createListing.css';
import Form from '../../components/Form.js'
import { UserContext } from '../../context/UserContext.js';
const BACKEND_DOMAIN = process.env.NODE_ENV == "production" ? "https://subletr-ibif.vercel.app" : "http://localhost:5000";

/**
 * The CreateListing component.
 * @returns {JSX.Element} The JSX element representing the CreateListing component.
 */
export default function CreateListing() {
  const {
    userId
  } = useContext(UserContext)

  useEffect(() => {
    if (!userId) window.location.href = `http://localhost:5000/auth/google`;

  }, [userId])

    return (
      <div className="createListingContainer">
        {/* <div className="center"> */}
          <Form/>
        {/* </div> */}
      </div>
    );
}
