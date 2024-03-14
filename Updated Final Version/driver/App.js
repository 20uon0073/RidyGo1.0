import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SignedInStack } from "./Navigation";
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthContext, AuthProvider } from "./AuthContext";
import AppNav from "./AppNav";
export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </Provider>
  );
}
