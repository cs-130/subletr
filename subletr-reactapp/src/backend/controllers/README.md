# Backend Controllers

The `./backend/controllers` folder contains functions executed for every route. These functions play a crucial role in processing incoming requests, handling business logic, and orchestrating the behavior of various endpoints within our backend.

## Folder Structure

Within this directory, you will find multiple controller files, each dedicated to specific endpoint functionalities. For example, the `./controllers/stripe.js` file would gather functions exclusively used by the Stripe endpoint. This modular structure helps maintain a clean and organized codebase, making it easier to manage and scale our application.

## Usage

When developing or maintaining our backend, you'll frequently find yourself working within this directory. To add new functionality to an endpoint, you can create a new controller file or extend an existing one, adding the relevant functions. This separation of concerns makes it straightforward to locate, modify, and test specific route logic.

## Contribution

If you're contributing to this codebase, please ensure that any changes or additions to the controllers are well-documented and maintain a consistent style with the existing code. Keeping the controllers organized and comprehensible is essential for the smooth operation of our backend.
