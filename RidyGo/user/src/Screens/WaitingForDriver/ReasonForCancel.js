import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import data from "./reasons";
import tw from "twrnc";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectOrder } from "../../../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
const ReasonForCancel = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const order = useSelector(selectOrder);
  console.warn("Order:", order);
  const SubmitReason = async () => {
    console.warn("Selected:", selected);
    // try {
    //   const response = await axios.put(
    //     `https://ridygo.cyclic.app/order/${order.id}/reason`,
    //     {
    //       Remarks: selected.reason,
    //     }
    //   );
    //   console.warn("Response:", response.data);
    // } catch (error) {
    //     console.warn("Error:", error);
    // }
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ReasonForCancel</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { reason }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              tw`flex-row justify-between items-center px-3 py-3 ${
                item.id === selected?.id &&
                "text-green-700 border-2 border-green-700"
              }`,
              { color: "green" },
            ]}
          >
            <View>
              <Text style={tw`text-xl font-semibold`}>{reason}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Pressable onPress={SubmitReason}>
        <Text style={tw`text-center py-3 text-xl bg-gray-950 text-white`}>
          Submit
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#333",
    paddingTop: 60,
    paddingBottom: 30,
    // paddingLeft: 10,
  },
});

export default ReasonForCancel;
