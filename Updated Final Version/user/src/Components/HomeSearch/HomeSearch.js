import { Pressable, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
// import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./style";

const HomeSearch = () => {
  return (
    <View>
      <Pressable
        //   onPress={goToSearch}
        style={styles.inputBox}
      >
        <Text style={styles.inputText}>Where To?</Text>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
      </Pressable>
    </View>
  );
};

export default HomeSearch;

// const styles = StyleSheet.create({});
