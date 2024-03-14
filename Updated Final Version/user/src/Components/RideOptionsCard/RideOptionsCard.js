import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  View,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import typesData from "../../assets/data/types";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { selectTravelTimeInformation } from "../../../slices/navSlice";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
  setOrder,
} from "../../../slices/navSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

// import { useNavigation } from '@react-navigation/native';

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const [price, setPrice] = useState(0);
  const [orderId, setOrderId] = useState("");
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const TimeInfo = useSelector(selectTravelTimeInformation);
const dispatch = useDispatch();

  const getPrice = (typeData) => {
    const calculatedPrice =
      travelTimeInformation?.duration?.value * typeData.multiplier;
    setPrice(calculatedPrice); // Set the price in the component state
    return Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "PKR",
    }).format(calculatedPrice);
  };
  const getImage = (type) => {
    if (type === "UberX") {
      return require("../../assets/images/UberX.jpeg");
    }
    if (type === "Comfort") {
      return require("../../assets/images/Comfort.jpeg");
    }

    return require("../../assets/images/UberXL.jpeg");
  };
  // console.warn(travelTimeInformation);
  // console.warn(price);

  const submitRideRequest = async () => {
    try {
      const response = await axios.post(
        `https://ridygo.cyclic.app/order/create`,
        {
          RideType: selected.type,
          Price: price,
          DestinationLongitude: destination.location.lat,
          DestinationLatitude: destination.location.lat,
          PickupLongitude: origin.location.lat,
          PickupLatitude: origin.location.lat,
        }
      );
      // Handle success
      console.warn("Response:", response.data._id);
      // setOrderId(response.data._id);
      // AsyncStorage.setItem("orderId", response.data._id);
      dispatch(
        setOrder({
          id: response.data._id,
        })
      )
      navigation.navigate("WaitingForDriver");
      // Dispatch an action or update state as needed based on the response
    } catch (error) {
      // Handle failure
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(
          "Server responded with error status:",
          error.response.status
        );
        console.error("Error response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
      // Dispatch an action or update state as needed based on the error
    }
    // Additional code to execute after handling success or failure
    console.warn(selected);
  };

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <Pressable
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 p-2 rounded-full left-5 bg-red-300`}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </Pressable>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            paddingVertical: 20,
            textAlign: "center",
          }}
        >
          Select a Ride {travelTimeInformation?.duration?.text || ""}
        </Text>
      </View>
      <FlatList
        data={typesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { type }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === selected?.id && "border-2 border-gray-400"
            }`}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
              }}
              source={getImage(type)}
            />
            <View>
              <Text style={tw`text-xl font-semibold`}>{type}</Text>
              <Text>{travelTimeInformation?.duration?.text || ""}</Text>
            </View>
            <Text style={tw`text-xl`}>{getPrice(item)}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`px-3 pb-2`}>
        <TouchableOpacity onPress={submitRideRequest}>
          <Text style={tw`text-center py-3 text-xl bg-gray-950 text-white`}>
            Order Ride
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
