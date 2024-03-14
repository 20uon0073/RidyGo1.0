import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import axios from "axios";
const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const deleteUSer = async () => {
    try {
      const response = await axios.delete(
        "https://ridygo.cyclic.app/user/65ee6add8b4b2e4a72a534c0"
      );
        console.warn("Response:", response.data);
    } catch (error) {
        console.warn("Error:", error);
    }
  };

  useEffect(() => {
    const getUSerData = async () => {
      try {
        const response = await axios.get(
          "https://ridygo.cyclic.app/user/65ee6add8b4b2e4a72a534c0"
        );
        console.warn("Response:", response.data);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUSerData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.logo}>Profile</Text>
        <View>
          <Text
            style={{
              fontSize: 0,
              fontWeight: "bold",
              color: "#333",
              paddingTop: 40,
              paddingBottom: 20,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              //   padding: 10,
              fontSize: 16,
              //   backgroundColor: "#eee",
              marginVertical: 5,
            }}
          >
            {email}
          </Text>
          <Pressable onPress={deleteUSer}>
            <Text
              style={{
                fontSize: 16,
                backgroundColor: "#eee",
                marginVertical: 5,
                color: "red",
              }}
            >
              deleteUser
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateProfile;
