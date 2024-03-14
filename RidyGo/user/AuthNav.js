// import { View, Text } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignedInStack, SignedOutStack } from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./context";
import { ActivityIndicator } from "react-native";
// ActivityIndicator
// AuthContext
const AuthNav = () => {
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
      {userToken !== null ? <SignedInStack /> : <SignedOutStack />}
    </NavigationContainer>
  );
};

export default AuthNav;
