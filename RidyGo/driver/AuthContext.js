import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [emailToken, setEmailToken] = useState(null);

  const login = (email, password) => {
    axios
      .post("https://ridygo.cyclic.app/rider/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        setUserToken(response.data.token);
        AsyncStorage.setItem("userToken", response.data.token);
        AsyncStorage.setItem("email", response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("email");
    setIsLoading(false);
  };
  const isLoggedin = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      let emailToken = await AsyncStorage.getItem("email");
      setUserToken(userToken);
      setEmailToken(emailToken);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    isLoggedin();
  }, []);
  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken,emailToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthContext;
