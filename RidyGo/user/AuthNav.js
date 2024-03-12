// import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignedInStack, SignedOutStack } from "./Navigation";

const AuthNav = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check authentication status here
    const checkAuthentication = async () => {
      // Example: check if user is authenticated from AsyncStorage
      const userToken = await AsyncStorage.getItem("token");
      setCurrentUser(userToken ? true : false);
    };

    checkAuthentication();
  }, []);

  return <SignedInStack />;
  // currentUser ? <SignedInStack /> : <SignedOutStack />;
};

export default AuthNav;
