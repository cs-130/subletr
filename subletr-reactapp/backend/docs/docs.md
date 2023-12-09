 backend 1.0.0 | Documentation     

### backend

`1.0.0``

- [backend](#backend)
- [passport](#passport)
- [handleAuthentication](#handleauthentication)
- [updateCustomer](#updatecustomer)
- [generateToken](#generatetoken)
- [verifyToken](#verifytoken)
- [chatCompletion](#chatcompletion)
- [openaiController](#openaicontroller)
- [getAllListings](#getalllistings)
- [createListing](#createlisting)
- [acceptListing](#acceptlisting)
- [getUserListings](#getuserlistings)
- [getFavoritedListings](#getfavoritedlistings)
- [getRentalHistory](#getrentalhistory)
- [logListingFavorite](#loglistingfavorite)
- [deleteListing](#deletelisting)
- [editListing](#editlisting)
- [sendAwsEmail](#sendawsemail)
- [createRentSubscription](#createrentsubscription)
- [createWebhook](#createwebhook)
- [getConversations](#getconversations)
- [getMessages](#getmessages)
- [sendMessage](#sendmessage)

[Need help reading this?](https://documentation.js.org/reading-documentation.html)

### passport

[subletr-reactapp/backend/config/passport.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/config/passport.js#L8-L61)

Configuration for the Google authentication strategy.

passport(passport: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))

Parameters

passport ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The passport instance to use for authentication.

### handleAuthentication

[subletr-reactapp/backend/controllers/auth.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/auth.js#L12-L38)

Handles the authentication process for the customer.

handleAuthentication

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

customer ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The customer object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### updateCustomer

[subletr-reactapp/backend/controllers/auth.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/auth.js#L46-L58)

Updates the customer information.

updateCustomer

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### generateToken

[subletr-reactapp/backend/utils/jwt.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/utils/jwt.js#L13-L22)

Generates a JWT token.

generateToken

Parameters

options ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The options for generating the token.

 

Name

Description

options.id [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

The ID for the token.

options.errorMessage [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

The error message to throw in case of an error.

options.secret [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

The secret key to sign the token.

Returns

[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String): The generated token.

Throws

*   [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error): If an error occurs during token generation.

### verifyToken

[subletr-reactapp/backend/utils/jwt.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/utils/jwt.js#L32-L40)

Verifies a JWT token.

verifyToken

Parameters

options ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The options for verifying the token.

 

Name

Description

options.token [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

The token to verify.

options.errorMessage [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

The error message to throw in case of an error.

options.secret [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

The secret key to verify the token.

Returns

[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String): The ID extracted from the token.

### chatCompletion

[subletr-reactapp/backend/controllers/openai.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/openai.js#L14-L21)

Generates completion chat responses using the OpenAI API.

chatCompletion

Parameters

prompt ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The user prompt.

Returns

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>: The completion response from the OpenAI API.

### openaiController

[subletr-reactapp/backend/controllers/openai.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/openai.js#L29-L42)

Controller function to access the OpenAI API for generating text completions.

openaiController

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### getAllListings

[subletr-reactapp/backend/controllers/listings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/listings.js#L15-L25)

Retrieves all listings.

getAllListings

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### createListing

[subletr-reactapp/backend/controllers/listings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/listings.js#L33-L56)

Creates a new listing.

createListing

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### acceptListing

[subletr-reactapp/backend/controllers/listings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/listings.js#L64-L104)

Accepts a listing request.

acceptListing

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### getUserListings

[subletr-reactapp/backend/controllers/listings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/listings.js#L112-L121)

Retrieves the listings created by a specific user.

getUserListings

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### getFavoritedListings

[subletr-reactapp/backend/controllers/listings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/listings.js#L129-L144)

Retrieves the favorited listings for a particular user.

getFavoritedListings

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### getRentalHistory

[subletr-reactapp/backend/controllers/listings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/listings.js#L152-L161)

Retrieves the rental history for a particular user.

getRentalHistory

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### logListingFavorite

[subletr-reactapp/backend/controllers/listings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/listings.js#L169-L183)

Logs a favorite action for a listing.

logListingFavorite

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### deleteListing

[subletr-reactapp/backend/controllers/listings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/listings.js#L191-L200)

Deletes a listing.

deleteListing

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### editListing

[subletr-reactapp/backend/controllers/listings.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/listings.js#L208-L229)

Edits a listing.

editListing

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### sendAwsEmail

[subletr-reactapp/backend/utils/notifications.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/utils/notifications.js#L18-L47)

Sends an email using AWS SES.

sendAwsEmail

Parameters

from ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The email address of the sender.

to ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The email address of the recipient.

subject ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The subject of the email.

content ([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)) The content of the email.

Returns

[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>: A promise that resolves to the response object.

### createRentSubscription

[subletr-reactapp/backend/controllers/stripe.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/stripe.js#L13-L76)

Creates a rent subscription in Stripe.

createRentSubscription

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### createWebhook

[subletr-reactapp/backend/controllers/webhook.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/webhook.js#L15-L101)

Creates a webhook endpoint to process Stripe events.

createWebhook

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### getConversations

[subletr-reactapp/backend/controllers/messages.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/messages.js#L10-L20)

Retrieves all conversations for a particular user.

getConversations

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### getMessages

[subletr-reactapp/backend/controllers/messages.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/messages.js#L28-L38)

Retrieves all messages for a particular conversation.

getMessages

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.

### sendMessage

[subletr-reactapp/backend/controllers/messages.js](https://github.com/cs-130/subletr/blob/e1c8fa8b0da7d4c89c9377d4eea8520e5a89ef86/subletr-reactapp/backend/controllers/messages.js#L46-L62)

Sends a message for a particular conversation.

sendMessage

Parameters

req ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The request object.

res ([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)) The response object.

Returns

[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object): The response object.