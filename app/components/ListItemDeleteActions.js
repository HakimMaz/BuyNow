import React from "react";
import Colors from "../config/colors";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
export default function ListItemDeleteActions({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          color={Colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff5252",
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
