import { StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import {
  selectOrigin,
  selectDestination,
  setTravelTimeInformation,
} from "../../../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import axios from "axios";
const GOOGLE_MAPS_APIKEY = "AIzaSyDeJpCLAWlRgFul8TvXGiLP8lp1p5Mf0HQ";

const RouteMap = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination || !mapRef.current) return;
    // console.warn(origin, destination, mapRef.current);
    console.warn("Fetching travel time");
    const getTravelTime = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=AIzaSyDeJpCLAWlRgFul8TvXGiLP8lp1p5Mf0HQ`
        );
        const data = response.data;
        console.warn(data); // Log the data to check its structure
        
        // Ensure that data contains the expected structure before dispatching
        if (data.rows && data.rows.length > 0 && data.rows[0].elements && data.rows[0].elements.length > 0) {
          const travelTimeInfo = data.rows[0].elements[0];
          dispatch(setTravelTimeInformation(travelTimeInfo));
        } else {
          console.warn("Invalid data structure received:", data);
        }
      } catch (error) {
        console.error("Error fetching travel time:", error);
        // Handle error gracefully, e.g., show an error message to the user
      }
    };

    getTravelTime();
  }, [origin, destination]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin?.location.lat || 0,
          longitude: origin?.location.lng || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            destination={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="From"
            description={origin.description}
            identifier="origin"
          />
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="To"
            description={destination.description}
            identifier="destination"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default RouteMap;
