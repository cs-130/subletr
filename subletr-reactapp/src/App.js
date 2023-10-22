import React, { useState, useEffect } from 'react';
import './App.css';
import Listing from './components/listing.js';
import { Pagination } from '@mui/material';
import { Box, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Header from './components/header1'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';





function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
  ]);


  return (
    <div className="container">
    {/* <Switch> */}
      <Header/>
      <RouterProvider router={router}/>

      
    {/* </Switch>    */}
    </div>
  );
}

export default App;

