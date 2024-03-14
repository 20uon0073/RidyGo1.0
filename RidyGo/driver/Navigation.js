import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import React from "react";
import Home from "./src/Screens/HomeScreen/Home";
import RideScreen from "./src/Screens/RidesScreen/RidesScreen";
import SignIn from "./src/Screens/SignIn/SignIn";
import SignUp from "./src/Screens/SignUp/SignUp";
import RideBegins from "./src/Screens/RideBegins/RideBegins";
const Stack = createStackNavigator();

export const SignedInStack = () => {
  return (
 
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RidesScreen" component={RideScreen} />
        <Stack.Screen name="RideBegins" component={RideBegins} />
        {/* <Stack.Screen name="Profile" component={UpdateProfile} /> */}
      </Stack.Navigator>

  );
};

export const SignedOutStack = () => {
  return (
   
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SignIn"
      >
       <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>

  );
};
