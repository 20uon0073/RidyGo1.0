import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation from @react-navigation/native
import axios from 'axios';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://long-teal-lobster-kilt.cyclic.app/user/signup', {
        name,
        email,
        password,
      });
      
      // Handle successful registration
      console.log(response.data);
      Alert.alert('Success', 'You have successfully registered!');
      navigation.navigate("SignIn"); // Handle navigation to the SignIn screen
    } catch (error) {
      // Handle error
      if (error.response) {
        // Server responded with an error status code (e.g., 4xx or 5xx)
        console.error('Server Error:', error.response.data);
        Alert.alert('Server Error', 'Failed to register. Please try again later.');
      } else if (error.request) {
        // No response received from the server
        console.error('Network Error:', error.request);
        Alert.alert('Network Error', 'Failed to connect to the server. Please check your internet connection.');
      } else {
        // Other errors
        console.error('Error:', error.message);
        Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
      }
    }
  };
  
  const navigation = useNavigation(); // Use useNavigation hook
  const handleCreateAccount = () => {
    navigation.navigate("SignIn"); // Handle navigation to the SignIn screen
    // Handle navigation to the SignIn screen
    console.log("Create Account");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Pressable onPress={handleCreateAccount}>
        <Text style={styles.Pressable}>Already have an account? Sign In</Text>
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
  Pressable: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
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
});
export default SignUp;
