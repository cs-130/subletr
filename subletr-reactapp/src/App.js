import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header1'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import CreateListing from './pages/CreateListing/CreateListing';




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/listings/create",
      element: <CreateListing />,
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

