// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { View, Text } from "react-native";
import React from "react";
import Home from "./src/Screens/Home/Home";
import DestinationSearch from "./src/Screens/DestinationSearch/DestinationSearch";
import SignIn from "./src/Screens/SignIn/SignIn";
import SignUp from "./src/Screens/SignUp/SignUp";
import WaitingForDriver from "./src/Screens/WaitingForDriver/WaitingForDriver";
import ReasonForCancel from "./src/Screens/WaitingForDriver/ReasonForCancel";

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
      <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
      <Stack.Screen name="WaitingForDriver" component={WaitingForDriver} />
      <Stack.Screen name="ReasonForCancel" component={ReasonForCancel} />
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
