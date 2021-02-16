import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "../components/Icon";
import AppText from "./AppText";
export default function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon.name}
          size={80}
        />
        <AppText style={styles.text}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
});
