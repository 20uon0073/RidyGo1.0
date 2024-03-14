import { View, Text, Pressable } from "react-native";
import * as Linking from "expo-linking";
import React, { useState } from "react";
import RouteMap from "../../Componente/RouteMap/RouteMap";
import { useSelector } from "react-redux";
import {
  selectRideFare,
  selectDestination,
  selectOrigin,
} from "../../slices/navSlice";

const RideBegins = ({ navigation }) => {
  const [rideBegins, setRideBegins] = useState(false);
  const [rideEnds, setRideEnds] = useState(false);
  const [buttonText, setButtonText] = useState("Start Ride");
  const fare = useSelector(selectRideFare);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const handleRideBegins = () => {
    if (rideBegins) {
      setRideEnds(true);
      setRideBegins(false);
      setButtonText("End Ride");
      navigation.navigate("RidesScreen");
      // Perform actions for ending the ride
      // For example: send ride completion data to backend, show ride summary, etc.
    } else {
      setRideBegins(true);
      setButtonText("Start Ride");
      // Perform actions for starting the ride
      // For example: start tracking location, start trip timer, etc.
      const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.location.lat},${origin.location.lng}&destination=${destination.location.lat},${destination.location.lng}`;

      // Opening the Google Maps app
      Linking.openURL(url).catch((err) =>
        console.error("An error occurred", err)
      );
    }
  };

  return (
    <View style={{ height: "100%" }}>
      <View>
        <Text
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            paddingTop: 30,
            paddingBottom: 10,
            borderRadius: 5,
            zIndex: 100,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Fare: {fare}
        </Text>
      </View>
      <RouteMap />
      <View>
        <Pressable
          onPress={handleRideBegins}
          style={{
            backgroundColor: "black",
            paddingVertical: 20,
            paddingHorizontal: 30,
            margin: 10,
            position: "absolute",
            bottom: 10,
            right: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              position: "relative",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 22,
            }}
          >
            {buttonText}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RideBegins;
