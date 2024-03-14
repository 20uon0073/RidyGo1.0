import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // Assuming your store is defined in ./store.js
// import AuthNav from "./Navigation/AuthNav";
import { AuthProvider } from "./AuthContext";
import AppNav from "./AppNav";
export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
      <AppNav/>
      </AuthProvider>

    </Provider>
  );
}
