import { View, Text, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import styles from "./styles";
import tw from "twrnc";
const RideNotificationCard = ({fare,anAccept}) => {
  const [distance, setDistance] = useState("20");
  return (
    <View style={styles.container}>
      <View style={tw`flex flex-col gap-y-2`}>
        <View>
          <Text style={tw`font-bold text-xl text-gray-500`}>{distance}</Text>
        </View>
        <View style={tw`flex items-center flex-row gap-x-2`}>
          <Text style={tw`font-semibold text-xl`}>Fare:</Text>
          <Text style={tw`font-bold text-3xl`}>{fare} PKR</Text>
        </View>
      </View>
      <View style={tw`flex flex-col gap-y-2`}>
        <TouchableOpacity
        onPress={anAccept}
        >
          <Text style={styles.acceptBtn}>Accept</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default RideNotificationCard;
