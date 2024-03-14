# RidyGo
> ## Backend https://ridygo.cyclic.app
## Documentation

## Overview
This document provides an overview of the functionality and user flow for a React Native ride-sharing app. The app allows users to log in, select an origin point, choose a destination point, select a ride type, and start a ride.

## User Flow

### 1. User Authentication
- Upon opening the app, users are prompted to log in.
- Users enter their credentials (e.g., email and password) to authenticate.

### 2. Select Origin Point
- After logging in, users are directed to select their origin point.
- Users can either manually enter an address or select their current location using GPS.

### 3. Select Destination Point
- Once the origin point is selected, users are prompted to choose their destination point.
- Similar to selecting the origin point, users can manually enter an address or choose a location using GPS.

### 4. Choose Ride Type
- After selecting the destination point, users are presented with options to choose the type of ride (e.g., economy, premium, or pool).
- Users can select the desired ride type based on their preference and budget.

### 5. Start Ride
- Once the ride type is selected, users can initiate the ride.
- The app calculates the fare based on the distance between the origin and destination points and the chosen ride type.
- Users confirm the ride and the app dispatches a driver to the specified location.
- The ride begins, and users can track the driver's location in real-time on the map.

## Components
- **Authentication Screen**: Allows users to log in using their credentials.
- **Location Selection Screen**: Allows users to select their origin and destination points.
- **Ride Type Selection Screen**: Presents users with options to choose the type of ride.
- **Ride Confirmation Screen**: Displays ride details and allows users to confirm and start the ride.
- **Map Component**: Shows the map view with the user's selected points and the driver's location during the ride.

## Technologies Used
- React Native: For building the cross-platform mobile application.
- React Navigation: For handling navigation between screens.
- AsyncStorage: For storing user authentication tokens.
- Axios: For making HTTP requests to the backend server.
- Maps SDK: For integrating maps and location services.
- Authentication API: For user authentication and authorization.
- Ride Dispatch API: For dispatching drivers and managing rides.

## Future Enhancements
- Implement payment integration for processing ride fares.
- Allow users to rate and review drivers after completing rides.
- Provide additional ride options such as carpooling or scheduled rides.
- Improve location accuracy and navigation features.

## Conclusion
This documentation provides an overview of the functionality, user flow, components, technologies used, and potential future enhancements for the React Native ride-sharing app. By following this guide, developers can understand the app's requirements and efficiently implement the desired features.
