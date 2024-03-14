import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "twrnc";
import PlaceRow from "../../Screens/DestinationSearch/PlaceRow";
import { setDestination } from "../../../slices/navSlice"; // Import setDestination action creator
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation from @react-navigation/native
// import RideOptionsCard from "../RideOptionsCard/RideOptionsCard";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Use useNavigation hook
  return (
    <SafeAreaView>
      <Text style={tw`text-center py-5 text-xl`}>NavigateCard</Text>
      <KeyboardAvoidingView style={tw`border-1 border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            if (navigation) {
              console.warn("11Navigating to RideOptionsCard");
              navigation.navigate("RideOptionsCard");
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
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 16,
    padding: 10,
  },
  autocompleteContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
  },
  listView: {
    position: "absolute",
    top: 102,
  },
  separator: {
    backgroundColor: "#efefef",
    height: 1,
  },
});
