import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigation = useNavigation();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Please enter both email and password.");
      return;
    }
    console.warn("Email:", email);
    try {
      const response = await axios.post(
        "https://ridygo.cyclic.app/user/signin",
        {
          email,
          password,
        }
      );
      console.warn("Response:", response.data);
      AsyncStorage.setItem("token", response.data.token);
      // AsyncStorage.setItem("user", response.data.user.name);
      AsyncStorage.setItem("email", response.data.user.email);
      if (!response.data.token) {
        Alert.alert("Error", "Invalid email or password");
      }
      Alert.alert("Success", "You have successfully signed in.");
      navigation.navigate("Home");
    } catch (error) {
      console.warn("Error:", error);
    }
  };

  const handleSignUp = () => {
    // navigation.push("SignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Pressable onPress={handleSignUp}>
        <Text style={styles.pressableText}>Don't have an account? Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressableText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignIn;
