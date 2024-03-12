import React from "react";
import { View, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import RouteMap from "../../Components/RouteMap/RouteMap";
import NavigateCard from "../../Components/NavigateCard/NavigateCard";
import RideOptionsCard from "../../Components/RideOptionsCard/RideOptionsCard";
const DestinationSearch = () => {
  const Stack = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: Dimensions.get("window").height / 2 }}>
        <RouteMap />
      </View>
      <View style={{ flex: 1 }}>
        {/* <NavigateCard /> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="NavigateCard"
        >
          <Stack.Screen name="NavigateCard" component={NavigateCard} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default DestinationSearch;
