import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import styles from "./styles";
import axios from "axios";
import RideNotificationCard from "../../Componente/RideNotificationCard/RideNotificationCard";
import { setDestination, setRideFare, setOrigin } from "../../slices/navSlice";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../AuthContext";
// AuthContext

const RidesScreen = ({ navigation }) => {
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [btnText, setBtnText] = useState("Go Online");
  const [fare, setFare] = useState("");
  const dispatch = useDispatch();
  const [originLatitude, setOriginLatitude] = useState(0);
  const [originLongitude, setOriginLongitude] = useState(0);
  const [destinationLatitude, setDestinationLatitude] = useState(0);
  const [destinationLongitude, setDestinationLongitude] = useState(0);
  const [ride, setRide] = useState(null);
  const { emailToken } = useContext(AuthContext);
  useEffect(() => {
    dispatch(
      setDestination({
        location: {
          lat: destinationLatitude,
          lng: destinationLongitude,
        },
      })
    );
    dispatch(
      setOrigin({
        location: {
          lat: originLatitude,
          lng: originLongitude,
        },
      })
    );
    dispatch(setRideFare(fare));
  }, [
    dispatch,
    destinationLatitude,
    destinationLongitude,
    fare,
    originLatitude,
    originLongitude,
  ]);

  const handleRideAccept = () => {
    console.warn("Ride Accepted");

    navigation.navigate("RideBegins");
  };

  const getAllAvailableRides = async () => {
    try {
      const response = await axios.get(
        `https://ridygo.cyclic.app/order/pendingOrders`
      );
      console.warn("Response:", response.data);
      if (response.data.success && response.data.data.length > 0) {
        const firstRide = response.data.data[0]; // Get the first ride in the response
        setFare(firstRide.Price);
        setDestinationLongitude(firstRide.DestinationLongitude);
        setDestinationLatitude(firstRide.DestinationLatitude);
        setOriginLongitude(firstRide.PickupLongitude);
        setOriginLatitude(firstRide.PickupLatitude);
      } else {
        console.warn("No available rides found");
      }
    } catch (error) {
      console.warn("Error:", error);
    }
  };

  const handleOnlineStatus = async () => {
    console.warn("Online Status");
    setOnlineStatus(!onlineStatus);
    getUser();
    try {
      const response = await axios.post(
        "https://ridygo.cyclic.app/rider/status/65f04407934060d0010f84d6",
        {
          status: onlineStatus ? "false" : "true",
        }
      );
      console.warn("Response:", response.data.status);
      setBtnText(onlineStatus ? "Offline" : "Online");
    } catch (error) {
      console.warn("Error:", error);
    }
  };

  useEffect(() => {
    getAllAvailableRides();
  }, [onlineStatus]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>RidyGo Earn Now</Text>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity onPress={handleOnlineStatus}>
          <Text style={[styles.button, onlineStatus ? styles.onlineBtn : null]}>
            {btnText}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ height: Dimensions.get("window").height - 800 }}>
        {fare !== "" ? (
          <RideNotificationCard fare={fare} anAccept={handleRideAccept} />
        ) : (
          onlineStatus === true ? <ActivityIndicator size="large" color="black" /> : 
          <Text>You are Offline</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default RidesScreen;
