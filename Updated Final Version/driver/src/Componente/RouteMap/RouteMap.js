import { StyleSheet, View } from "react-native";
import React, { useRef, useEffect } from "react";
import MapView,{Marker} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const GOOGLE_MAPS_APIKEY = "AIzaSyDeJpCLAWlRgFul8TvXGiLP8lp1p5Mf0HQ";
import {
  selectDestination,
  selectOrigin,
  selectRideFare,
} from "../../slices/navSlice";
import { useSelector, useDispatch } from "react-redux";
const RouteMap = () => {
  const mapRef = useRef();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const fare = useSelector(selectRideFare);
  useEffect(() => {
    console.warn(origin);
    console.warn(destination);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        // ref={mapRef}
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
