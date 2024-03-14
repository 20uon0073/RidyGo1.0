import { SignedInStack, SignedOutStack } from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React , {useContext}from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { AuthContext } from "./AuthContext";
const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
 
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <SignedInStack /> */}
     {userToken !== null ? <SignedInStack /> : <SignedOutStack />}
    </NavigationContainer>
  );
};

export default AppNav;
