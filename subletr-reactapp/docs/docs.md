 subletr-reactapp 0.1.0 | Documentation     

### subletr-reactapp

0.1.0

- [subletr-reactapp](#subletr-reactapp)
- [logoutCustomer](#logoutcustomer)
- [getUserListings](#getuserlistings)
- [getListings](#getlistings)
- [getViewedListings](#getviewedlistings)
- [getRentalHistory](#getrentalhistory)
- [callFavoriteListing](#callfavoritelisting)
- [isLoggedIn](#isloggedin)
- [createListing](#createlisting)
- [rentAndStartPayingForListing](#rentandstartpayingforlisting)
- [deletelisting](#deletelisting)
- [editListing](#editlisting)
- [callSendMessage](#callsendmessage)
- [callGetConversations](#callgetconversations)
- [getCustomerDocument](#getcustomerdocument)
- [callGetMessages](#callgetmessages)
- [App](#app)
- [CurrentHeader](#currentheader)
- [GOOGLE\_MAPS\_API\_KEY](#google_maps_api_key)
- [autocompleteService](#autocompleteservice)
- [loadScript](#loadscript)
- [BasicInfo](#basicinfo)
- [TwoColumnLayout](#twocolumnlayout)
- [IconBreadcrumbs](#iconbreadcrumbs)
- [FeatureInfo](#featureinfo)
- [FeatureInfo](#featureinfo-1)
- [generateFlashyDescription](#generateflashydescription)
- [convertToBase64](#converttobase64)
- [handleFileUpload](#handlefileupload)
- [handleImageDelete](#handleimagedelete)
- [FilterComponent](#filtercomponent)
- [steps](#steps)
- [Form](#form)
- [handleBack](#handleback)
- [handleSubmitFinal](#handlesubmitfinal)
- [formContent](#formcontent)
- [HeaderComponent](#headercomponent)
- [HeaderComponent](#headercomponent-1)
- [toggleFilter](#togglefilter)
- [toggleFilter](#togglefilter-1)
- [ChipArray](#chiparray)
- [ListingHeading](#listingheading)
- [ImageQuoteCarousel](#imagequotecarousel)
- [Listing](#listing)
- [handleLikeToggle](#handleliketoggle)
- [MoreInfo](#moreinfo)
- [ReviewInfo](#reviewinfo)
- [ListingsContext](#listingscontext)
- [ListingsProvider](#listingsprovider)
- [UserContext](#usercontext)
- [UserProvider](#userprovider)
- [BlankBox](#blankbox)
- [CreateListing](#createlisting-1)
- [DetailedListing](#detailedlisting)
- [HomePage](#homepage)
- [handleViewMore](#handleviewmore)
- [handleListingClick](#handlelistingclick)
- [handleListingClick](#handlelistingclick-1)
- [handleFilterChange](#handlefilterchange)
- [displayListing](#displaylisting)
- [ManageListing](#managelisting)
- [MyListings](#mylistings)
- [handleDelete](#handledelete)
- [Profile](#profile)
- [RentalHistory](#rentalhistory)

[Need help reading this?](https://documentation.js.org/reading-documentation.html)

### logoutCustomer

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L12-L21)

Logs out the customer.

logoutCustomer

Returns

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>: A promise that resolves to true if the logout is successful, false otherwise.

### getUserListings

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L29-L39)

Gets the listings associated with a user.

getUserListings

Parameters

userId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the user.

Returns

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<(false | [array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))>: A promise that resolves to an array of listings if successful, or false if there was an error.

### getListings

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L46-L54)

Gets all the listings.

getListings

Returns

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) | false)>: A promise that resolves to an array of all listings if successful, or false if there was an error.

### getViewedListings

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L62-L72)

Gets the listings favorited by a user.

getViewedListings

Parameters

userId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the user.

Returns

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) | false)>: A promise that resolves to an array of favorited listings if successful, or false if there was an error.

### getRentalHistory

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L80-L90)

Gets the rental history of a user.

getRentalHistory

Parameters

userId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the user.

Returns

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) | false)>: A promise that resolves to an array of rental history if successful, or false if there was an error.

### callFavoriteListing

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L99-L111)

Calls the API to favorite a listing for a user.

callFavoriteListing

Parameters

listingId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the listing.

userId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the user.

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | false): A promise that resolves with the response object if successful, or false if there was an error.

### isLoggedIn

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L118-L128)

Checks if the customer is currently logged in.

isLoggedIn

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | false): A promise that resolves with the login status (true if logged in, false otherwise) or false if there was an error.

### createListing

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L137-L149)

Creates a new listing.

createListing

Parameters

data ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The listing data.

userId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the user.

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | false): A promise that resolves with the created listing if successful, or false if there was an error.

### rentAndStartPayingForListing

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L157-L172)

Rents a listing and starts paying for it.

rentAndStartPayingForListing

Parameters

listingId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the listing.

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | false): A promise that resolves with the data if successful, or false if there was an error.

### deletelisting

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L180-L192)

Deletes a listing.

deletelisting

Parameters

listingId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the listing to delete.

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | false): A promise that resolves with the data if successful, or false if there was an error.

### editListing

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L201-L212)

Edits a listing.

editListing

Parameters

listingId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the listing to edit.

listingData ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The updated listing data.

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | void): A promise that resolves with the data if successful, otherwise, the function does not return anything.

### callSendMessage

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L221-L234)

Calls the API to send a message.

callSendMessage

Parameters

data ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The message data.

userId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the user.

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | false): A promise that resolves with the data if successful, or false if there was an error.

### callGetConversations

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L242-L252)

Calls the API to get conversations.

callGetConversations

Parameters

userId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the user.

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | false): A promise that resolves with the data if successful, or false if there was an error.

### getCustomerDocument

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L259-L270)

Gets the customer document.

getCustomerDocument

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | false): A promise that resolves with the document if successful, or false if there was an error.

### callGetMessages

[subletr-reactapp/src/api/api.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/api/api.js#L278-L288)

Calls the API to get messages.

callGetMessages

Parameters

conversationId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the conversation.

Returns

([Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) | false): A promise that resolves with the data if successful, or false if there was an error.

### App

[subletr-reactapp/src/App.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/App.js#L27-L71)

The root component of the application, responsible for rendering different routes and managing user context.

App(): JSX.element

Returns

JSX.element: The JSX to be rendered.

### CurrentHeader

[subletr-reactapp/src/App.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/App.js#L35-L47)

Component that renders the appropriate header based on the current URL path. If the path starts with "/listings/create/", or matches "/testing" or "/profile", it renders the HeaderNoSearch component. Otherwise, it renders the Header component.

CurrentHeader

### GOOGLE\_MAPS\_API\_KEY

[subletr-reactapp/src/components/BasicInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/BasicInfo.js#L15-L15)

The Google Maps API key.

GOOGLE\_MAPS\_API\_KEY

Type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

### autocompleteService

[subletr-reactapp/src/components/BasicInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/BasicInfo.js#L21-L21)

The current instance of the autocomplete service.

autocompleteService

### loadScript

[subletr-reactapp/src/components/BasicInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/BasicInfo.js#L29-L39)

Loads a script dynamically.

loadScript(src: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), position: [Element](https://developer.mozilla.org/docs/Web/API/Element), id: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))

Parameters

src ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The source URL of the script.

position ([Element](https://developer.mozilla.org/docs/Web/API/Element)) The position where the script should be inserted.

id ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID attribute for the script element.

### BasicInfo

[subletr-reactapp/src/components/BasicInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/BasicInfo.js#L49-L224)

The component that displays the basic information of the listing.

BasicInfo(props: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)): JSX.Element

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

Returns

JSX.Element: The JSX element representing the BasicInfo component.

### TwoColumnLayout

[subletr-reactapp/src/components/bottom-detailed-listing.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/bottom-detailed-listing.js#L17-L79)

The component that displays the two-column layout.

TwoColumnLayout(description: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), biography: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), startDate: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), endDate: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), owner: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), onReserve: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)): JSX.Element

Parameters

description ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The description to display in the left column.

biography ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The biography to display in the right column.

startDate ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The start date of the stay.

endDate ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The end date of the stay.

owner ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The owner of the stay.

onReserve ([Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)) The function to call when the "Reserve your spot" button is clicked.

Returns

JSX.Element: The JSX element representing the TwoColumnLayout component.

### IconBreadcrumbs

[subletr-reactapp/src/components/breadcrumbs.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/breadcrumbs.js#L14-L58)

The component that displays the breadcrumbs.

IconBreadcrumbs(): JSX.Element

Returns

JSX.Element: The JSX element representing the IconBreadcrumbs component.

### FeatureInfo

[subletr-reactapp/src/components/ContactInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/ContactInfo.js#L13-L46)

Component for displaying additional feature information.

FeatureInfo(props: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)): JSX.Element

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.formik [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

The Formik object for form management.

Returns

JSX.Element: The JSX element representing the FeatureInfo component.

### FeatureInfo

[subletr-reactapp/src/components/FeatureInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/FeatureInfo.js#L49-L259)

The FeatureInfo component.

FeatureInfo

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.formik [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

The Formik object for form management.

Returns

JSX.Element: The JSX element representing the FeatureInfo component.

### generateFlashyDescription

[subletr-reactapp/src/components/FeatureInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/FeatureInfo.js#L57-L78)

Generates a flashy description for the place by calling the OpenAI backend route.

generateFlashyDescription

Returns

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise): A promise that resolves when the description is generated.

### convertToBase64

[subletr-reactapp/src/components/FeatureInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/FeatureInfo.js#L85-L96)

Converts a file to base64 data encoding.

convertToBase64

Parameters

file (File) The file to convert.

Returns

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>: A promise that resolves with the base64 encoded data of the file.

### handleFileUpload

[subletr-reactapp/src/components/FeatureInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/FeatureInfo.js#L102-L111)

Handles the file upload event.

handleFileUpload

Parameters

e ([Event](https://developer.mozilla.org/docs/Web/API/Event)) The file upload event.

### handleImageDelete

[subletr-reactapp/src/components/FeatureInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/FeatureInfo.js#L117-L122)

Handles the deletion of an image from the images array.

handleImageDelete

Parameters

i ([number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)) The index of the image to delete.

### FilterComponent

[subletr-reactapp/src/components/filter.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/filter.js#L19-L194)

The component that displays the filter options.

FilterComponent(props: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)): JSX.Element

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.handleFilterChange [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

The function to call when the filter changes.

Returns

JSX.Element: The JSX element representing the FilterComponent.

### steps

[subletr-reactapp/src/components/Form.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/Form.js#L25-L31)

The steps of the form.

steps

Type: [array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Form

[subletr-reactapp/src/components/Form.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/Form.js#L41-L158)

The component that displays the form for creating a listing.

Form(props: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)): JSX.Element

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

Returns

JSX.Element: The JSX element representing the Form component.

### handleBack

[subletr-reactapp/src/components/Form.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/Form.js#L49-L51)

Handles going back to the previous step.

handleBack

### handleSubmitFinal

[subletr-reactapp/src/components/Form.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/Form.js#L56-L60)

Handles submitting the final form.

handleSubmitFinal

### formContent

[subletr-reactapp/src/components/Form.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/Form.js#L105-L120)

Returns the JSX element for the form content based on the current step.

formContent

Parameters

step ([number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)) The current step index.

Returns

JSX.Element: The JSX element representing the form content.

### HeaderComponent

[subletr-reactapp/src/components/header1.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/header1.js#L24-L97)

The component that displays the header section for the home listings page.

HeaderComponent(): JSX.Element

Returns

JSX.Element: The JSX element representing the HeaderComponent.

### HeaderComponent

[subletr-reactapp/src/components/headerNoSearch.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/headerNoSearch.js#L13-L58)

The HeaderComponent component.

new HeaderComponent(): JSX.Element

Returns

JSX.Element: The JSX element representing the HeaderComponent.

### toggleFilter

[subletr-reactapp/src/components/header1.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/header1.js#L30-L32)

Toggles the filter visibility.

toggleFilter

### toggleFilter

[subletr-reactapp/src/pages/HomePage/HomePage.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/HomePage/HomePage.js#L37-L39)

Toggles the filter visibility.

toggleFilter

### ChipArray

[subletr-reactapp/src/components/listing-chips.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/listing-chips.js#L12-L22)

The ChipArray component.

ChipArray

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.items [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>

The array of items for the chips.

Returns

JSX.Element: The JSX element representing the ChipArray component.

### ListingHeading

[subletr-reactapp/src/components/listing-heading.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/listing-heading.js#L11-L24)

The ListingHeading component.

ListingHeading

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.title [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

The title of the listing.

props.rent [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

The rent of the listing.

Returns

JSX.Element: The JSX element representing the ListingHeading component.

### ImageQuoteCarousel

[subletr-reactapp/src/components/listing-image-card.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/listing-image-card.js#L54-L78)

The component that displays the image quote carousel for the listing page.

ImageQuoteCarousel(props: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)): JSX.Element

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.images [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>

The array of image URLs.

Returns

JSX.Element: The JSX element representing the ImageQuoteCarousel component.

### Listing

[subletr-reactapp/src/components/listing.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/listing.js#L24-L140)

The Listing component.

new Listing(props: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)): JSX.Element

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.data [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

The data object that represents a listing.

props.onClick [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

The function called when the listing is clicked.

props.favoriteMode [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) (default 0)

The favorite mode for the listing.

props.handleDelete [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) (default null)

The function called when the listing delete is clicked.

Returns

JSX.Element: The JSX element representing the Listing component.

### handleLikeToggle

[subletr-reactapp/src/components/listing.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/listing.js#L33-L41)

Handles toggling the like status of the listing.

handleLikeToggle

Parameters

e ([Event](https://developer.mozilla.org/docs/Web/API/Event)) The click event.

### MoreInfo

[subletr-reactapp/src/components/MoreInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/MoreInfo.js#L12-L74)

The MoreInfo component.

MoreInfo

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.formik [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

The Formik object for form management.

Returns

JSX.Element: The JSX element representing the MoreInfo component.

### ReviewInfo

[subletr-reactapp/src/components/ReviewInfo.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/components/ReviewInfo.js#L9-L84)

The ReviewInfo component, final page of the Create Listing form.

ReviewInfo

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.formik [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

The Formik object for form management.

Returns

JSX.Element: The JSX element representing the ReviewInfo component.

### ListingsContext

[subletr-reactapp/src/context/ListingsProvider.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/context/ListingsProvider.js#L10-L10)

The context for managing listings.

ListingsContext

Type: React.Context

### ListingsProvider

[subletr-reactapp/src/context/ListingsProvider.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/context/ListingsProvider.js#L18-L88)

The provider component for the ListingsContext.

ListingsProvider

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.children React.ReactNode

The child components wrapped by the provider.

Returns

JSX.Element: The JSX element representing the ListingsProvider component.

### UserContext

[subletr-reactapp/src/context/UserContext.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/context/UserContext.js#L18-L18)

The context for managing user-related data and functionality.

UserContext

Type: React.Context

### UserProvider

[subletr-reactapp/src/context/UserContext.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/context/UserContext.js#L26-L136)

The provider component for the UserContext.

UserProvider

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.children React.ReactNode

The child components wrapped by the provider.

Returns

JSX.Element: The JSX element representing the UserProvider component.

### BlankBox

[subletr-reactapp/src/pages/CreateListing/blankBox.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/CreateListing/blankBox.js#L12-L21)

The BlankBox component.

BlankBox

Parameters

props ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The component props.

 

Name

Description

props.label [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

The label for the box.

props.labelStyle [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

The styles for the label.

props.contents React.ReactNode

The contents of the box.

Returns

JSX.Element: The JSX element representing the BlankBox component.

### CreateListing

[subletr-reactapp/src/pages/CreateListing/CreateListing.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/CreateListing/CreateListing.js#L10-L26)

The CreateListing component.

new CreateListing(): JSX.Element

Returns

JSX.Element: The JSX element representing the CreateListing component.

### DetailedListing

[subletr-reactapp/src/pages/DetailedListing/detailed-listing.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/DetailedListing/detailed-listing.js#L19-L75)

The component that displays the detailed view of a listing.

DetailedListing(): JSX.Element

Returns

JSX.Element: The JSX element representing the DetailedListing component.

### HomePage

[subletr-reactapp/src/pages/HomePage/HomePage.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/HomePage/HomePage.js#L19-L187)

The HomePage component for the application's home page. Displays listings and provides filtering options.

new HomePage(): JSX.Element

Returns

JSX.Element: The JSX element representing the HomePage component.

### handleViewMore

[subletr-reactapp/src/pages/HomePage/HomePage.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/HomePage/HomePage.js#L47-L49)

Handles the "View More" button click. Increases the number of displayed listings.

handleViewMore

### handleListingClick

[subletr-reactapp/src/pages/HomePage/HomePage.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/HomePage/HomePage.js#L55-L57)

Handles the click event on a listing to navigate to the detailed listing page.

handleListingClick

Parameters

listing\_id ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the clicked listing.

### handleListingClick

[subletr-reactapp/src/pages/Profile/MyListings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/Profile/MyListings.js#L23-L25)

Handles the click event when a listing is clicked. Navigates to the detailed view of the clicked listing.

handleListingClick

Parameters

listingId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the clicked listing.

### handleFilterChange

[subletr-reactapp/src/pages/HomePage/HomePage.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/HomePage/HomePage.js#L66-L77)

Handles the change event in the filter component and filters the listings accordingly.

handleFilterChange

Parameters

accommodationType ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The selected accommodation type.

amenities ([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>) The selected amenities.

spots ([number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)) The selected number of spots.

rentRange ([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>) The selected rent range.

### displayListing

[subletr-reactapp/src/pages/HomePage/HomePage.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/HomePage/HomePage.js#L84-L110)

Determines whether a listing should be displayed based on the filter criteria.

displayListing

Parameters

listing ([object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The listing object.

Returns

[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean): true if the listing should be displayed, false otherwise.

### ManageListing

[subletr-reactapp/src/pages/Profile/ManageListing.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/Profile/ManageListing.js#L27-L155)

The ManageListing component. Allows for editing your listings.

ManageListing

Returns

JSX.Element: The JSX element representing the ManageListing component.

### MyListings

[subletr-reactapp/src/pages/Profile/MyListings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/Profile/MyListings.js#L13-L60)

The component that displays the user's listings.

MyListings(): JSX.Element

Returns

JSX.Element: The JSX element representing the MyListings component.

### handleDelete

[subletr-reactapp/src/pages/Profile/MyListings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/Profile/MyListings.js#L32-L34)

Handles the delete event when a listing is deleted. Calls the deleteListing function to delete the listing.

handleDelete

Parameters

listingId ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The ID of the listing to delete.

### Profile

[subletr-reactapp/src/pages/Profile/profile.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/Profile/profile.js#L14-L117)

The Profile component.

new Profile(): JSX.Element

Returns

JSX.Element: The JSX element representing the Profile component.

### RentalHistory

[subletr-reactapp/src/pages/Profile/RentalHistory.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/src/pages/Profile/RentalHistory.js#L12-L45)

The RentalHistory component.

RentalHistory

Returns

JSX.Element: The JSX element representing the RentalHistory component.