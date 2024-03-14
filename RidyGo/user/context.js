import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [test, setTest] = useState("test");
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [emailToken, setEmailToken] = useState(null);
  const login = () => {
    setUserToken(null);
    setEmailToken("test");
    setIsLoading(false);
  };
  const logout = () => {
    setUserToken(null);
    setEmailToken(null);
    setIsLoading(false);
  };
  return <AuthContext.Provider value={{test, login}}>{children}</AuthContext.Provider>;
};
