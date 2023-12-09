# User Manual for Subletr

## Table of Contents

1. [Introduction](#introduction)
2. [Installation and Deployment](#installation-and-deployment)
3. [User Story and Application Overview](#user-story-and-application-overview)
4. [How to Use the Application](#how-to-use-the-application)
   - [Registering an Account](#registering-an-account)
   - [Searching for Apartments](#searching-for-apartments)
   - [Listing an Apartment](#listing-an-apartment)
   - [Managing Listings and Applications](#managing-listings-and-applications)
   - [Contacting Subletters or Owners](#contacting-subletters-or-owners)
5. [Support and Contact](#support-and-contact)

## Introduction

This manual provides comprehensive guidance on how to use our web application, designed specifically for college students looking to sublet apartments. Whether you are looking to find a temporary home or sublet your place, this guide will walk you through every step of the process.

## Installation and Deployment

To install and deploy our web application:

1. **Download the Application:** First, download the latest version of the application from our Github repository.
2. **Installation:** Simply unzip the file if downloaded and navigate to /subletr-reactapp.
3. **Deployment:** After installation, deploy the application by running two scripts: npm run start in the frontend folder.

To run backend server:

ensure node.js is installed
navigate to /backend folder (or include in file path)
create .env file with contents from @Hritik in text chain
run: node ./index.js
NOTE: On Mac, port 5000 is used by default by AirPlay Receiver. You must turn that off if server is still set to 5000 (should be changed eventually)

## User Story and Application Overview

For an overview of how our application meets the needs of college students in subletting apartments, we cannot provide a Github Wiki page due to the repository being private.

In spite of this, I can still paste our user story here!

# User Story: Subletting an Apartment as a College Student

## Title: Finding and Subletting an Apartment for a Semester

**As a** college student with a dynamic academic schedule,

**I want to** find a flexible housing option that suits my short-term academic needs,

**So that** I can have a convenient and affordable place to stay during my semester without committing to a long-term lease.

### Acceptance Criteria:

1. **Search Functionality:**
   - As a user, I should be able to search for available apartments based on specific criteria like location, price range, and duration of stay.
   - The app should display a list of apartments that match my search criteria, along with detailed descriptions and images.

2. **Listing Creation:**
   - As a user, I should be able to list my apartment for subletting, providing details such as location, price, amenities, and available dates.
   - The listing process should be straightforward and should allow me to upload photos of my apartment.

3. **Secure Communication:**
   - The app should provide a secure and easy-to-use messaging system for me to communicate with potential subletters or landlords.
   - I should be able to discuss details like rent, utilities, and lease terms through the app without sharing personal contact information.

4. **Application and Approval Process:**
   - As a user looking for an apartment, I should be able to apply for a sublet directly through the app.
   - As a user listing an apartment, I should be able to review applications and approve or reject them based on the applicants' profiles and my preferences.

### User Story End Goal:

The end goal of this user story is to provide a flexible, secure, and user-friendly platform for college students to find and sublet apartments, accommodating their transient schedules.


## How to Use the Application

### Registering an Account

1. Open the web application and click on the 'Sign Up' button.
2. Use the register account with Google option that pops up.

<img width="1240" alt="Screenshot 2023-12-07 at 5 12 37 PM" src="https://github.com/cs-130/subletr/assets/47373615/9ca031c1-9fce-4f27-b6bd-a5751cde0b9f">

### Searching for Apartments

1. Log in to your account.
2. Navigate to the 'Search' tab.
3. Enter your preferences and search for available apartments.

<img width="1169" alt="Screenshot 2023-12-07 at 5 15 38 PM" src="https://github.com/cs-130/subletr/assets/47373615/f7bf845c-8550-455c-a2ee-0c8da70b9594">


### Listing an Apartment

1. Go to the 'Create a Listing' section.
2. Fill in the details of your apartment.
3. Submit the listing for approval.

<img width="1169" alt="Screenshot 2023-12-07 at 5 16 18 PM" src="https://github.com/cs-130/subletr/assets/47373615/0be34a51-b1b8-442b-a77d-716560743f59">

### Contacting Subletters or Owners

1. Use the in-app messaging system to contact potential subletters or apartment owners.
2. Arrange meetings or discuss details through the app.

<img width="1169" alt="Screenshot 2023-12-07 at 5 17 10 PM" src="https://github.com/cs-130/subletr/assets/47373615/0c031a9e-fcc1-477f-9cb1-b13469034108">

## Stripe Payments

You need to navigate to the "Reserve Listing" on any listing and it will transfer you to our partner Stripe to set up a recurring transaction.

<img width="1169" alt="Screenshot 2023-12-07 at 5 18 20 PM" src="https://github.com/cs-130/subletr/assets/47373615/10092ea6-d5d2-4c03-b681-ef7294639e90">
