import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import RouteMap from "../../Components/RouteMap/RouteMap";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { selectOrder } from "../../../slices/navSlice";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const WaitingForDriver = () => {
  const navigation = useNavigation();
  const order = useSelector(selectOrder);
  console.warn("Order:", order);
  const updateOrderStatus = async () => {
    try {
      const response = await axios.put(
        `https://ridygo.cyclic.app/order/status/${order.id}`,
        {
          status: "Canceled By User",
        }
      );
      navigation.navigate("ReasonForCancel");
      console.warn("Response:", response.data);
    } catch (error) {
      console.warn("Error:", error);
    }
  };
  // console.warn("Order );
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>WaitingForDriver</Text>
      <View style={{ height: Dimensions.get("window").height - 280 }}>
        <RouteMap />
      </View>
      <View>
        <Pressable
          style={{
            backgroundColor: "black",
            padding: 10,
            // margin: 10,
            alignItems: "center",
            marginTop: 40,
          }}
          onPress={updateOrderStatus}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Cancel
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WaitingForDriver;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#333",
    paddingTop: 60,
    paddingBottom: 30,
    // paddingLeft: 10,
  },
});
