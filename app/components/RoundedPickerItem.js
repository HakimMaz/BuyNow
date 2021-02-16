import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "../components/Icon";
export default function RoundedPickerItem({ name, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon style={styles.icon} name={name} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
