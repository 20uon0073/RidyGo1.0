import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./context";
import { SignedInStack, SignedOutStack } from "./Navigation";
import { ActivityIndicator, View } from "react-native";

const AuthNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : userToken !== null ? (
        <SignedInStack />
      ) : (
        <SignedOutStack />
      )}
    </NavigationContainer>
  );
};

export default AuthNav;
