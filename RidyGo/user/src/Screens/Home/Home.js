import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation from @react-navigation/native
import PlaceRow from "../DestinationSearch/PlaceRow";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../../slices/navSlice";

import styles from "./styles";
// import { useEffect } from "react/cjs/react.production.min";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 32.1, lng: 74.88 } },
};

const workPlace = {
  description: "Workplace",
  geometry: { location: { lat: 32.12, lng: 74.87 } },
};

const Home = () => {
  const navigation = useNavigation(); // Use useNavigation hook
  const dispatch = useDispatch();
  const [originPlace, setOriginPlace] = useState("");
  // useEffect(() => {
  //   if (originPlace) {
  //     navigation.navigate("DestinationSearch", { originPlace });
  //   }
  // }, [originPlace]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>Ridy Go</Text>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
            if (navigation) {
              console.warn("11Navigating to RideOptionsCard");
              // navigation.navigate("RideOptionsCard");
            } else {
              console.warn("22Navigation prop is not available");
            }
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: "AIzaSyDeJpCLAWlRgFul8TvXGiLP8lp1p5Mf0HQ",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          predefinedPlaces={[homePlace, workPlace]}
        />
      </View>
      <Pressable
        style={{
          backgroundColor: "black",
          padding: 10,
          marginVertical: 20,
          alignItems: "center",
          color: "white",
        }}
        onPress={() => {
          navigation.navigate("DestinationSearch");
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Get Ridy
        </Text>
      </Pressable>
    </View>
  );
};

export default Home;
