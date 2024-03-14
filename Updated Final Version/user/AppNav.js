import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar"; // Assuming you're using Expo StatusBar
import { SignedInStack, SignedOutStack } from "./Navigation";
import { AuthContext } from "./AuthContext";

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {userToken !== null ? <SignedInStack /> : <SignedOutStack />}
    </NavigationContainer>
  );
};

export default AppNav;
