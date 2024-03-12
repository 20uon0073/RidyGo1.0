import { Dimensions, Text, View } from "react-native";
import React from "react";
import RouteMap from "../../Components/RouteMap/RouteMap";
import RideOptionsCard from "../../Components/RideOptionsCard/RideOptionsCard";
const SearchResults = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: Dimensions.get("window").height / 2 }}>
        <RouteMap />
      </View>
      <View style={{ flex: 1 }}>
        <RideOptionsCard />
      </View>
    </View>
  );
};

export default SearchResults;
