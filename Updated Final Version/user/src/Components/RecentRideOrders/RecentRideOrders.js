import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://ridygo.cyclic.app/user/recents/";

const PlaceNameFromCoordinates = ({ latitude, longitude }) => {
  const [placeName, setPlaceName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaceName = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDeJpCLAWlRgFul8TvXGiLP8lp1p5Mf0HQ`
        );
        if (response.data.results.length > 0) {
          // console.warn("Response:", response.data.results[0].formatted_address);
          setPlaceName(response.data.results[0].formatted_address);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching place name:", error);
      }
    };

    fetchPlaceName();
  }, [latitude, longitude]);

  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  return (
    <View>
      <Text>{placeName}</Text>
    </View>
  );
};
const RecentRideOrders = () => {
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const fetchRecentOrders = async () => {
      try {
        const response = await axios.get(`${baseURL}/65ee6add8b4b2e4a72a534c0`);
        console.warn("Response:", response.data);
        setRecentOrders(response.data);
      } catch (error) {
        console.error("Error fetching recent orders:", error);
      }
    };

    fetchRecentOrders();
  }, []);

  return (
    <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            // textAlign: "center",
            paddingVertical: 15,
            color: "black",
          }}
        >
          Recent Orders
        </Text>
        {recentOrders ? (
          recentOrders.map((order, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                paddingVertical: 20,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "semibold",
                    paddingBottom: 10,
                  }}
                >
                  <PlaceNameFromCoordinates
                    latitude={order.PickupLatitude}
                    longitude={order.PickupLongitude}
                  />
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "semibold",
                    // paddingVertical: 10,
                  }}
                >
                  <PlaceNameFromCoordinates
                    latitude={order.DestinationLatitude}
                    longitude={order.DestinationLongitude}
                  />
                </Text>
              </View>
              <Text
                style={{
                  color: "orange",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {order.status}
              </Text>
            </View>
          ))
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default RecentRideOrders;
