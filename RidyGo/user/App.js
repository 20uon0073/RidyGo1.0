import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // Assuming your store is defined in ./store.js
import AuthNav from "./AuthNav";
export default function App() {
  return (
    <Provider store={store}>
      <AuthNav />
    </Provider>
  );
}
