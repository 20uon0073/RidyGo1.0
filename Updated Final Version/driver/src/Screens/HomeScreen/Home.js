import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Ridy Go</Text>
      <Pressable
      onPress={() => navigation.navigate("RidesScreen")}
      >
        <Text
        style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",    
            padding: 10,
            backgroundColor: "black"
            // paddingTop: 40,
            // paddingBottom: 20,
            }}
        
        >Start Your Day</Text>
      </Pressable>
    </View>
  );
};

export default Home;
