import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from '@expo/vector-icons';
import styles from "./styles";
const PlaceRow = ({data}) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === "Home" ? (
          <Entypo name="home" siz={20} color={"white"} />
        ) : (
          <Entypo name="location-pin" siz={20} color={"white"} />
        )}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;

