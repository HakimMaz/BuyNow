import React from "react";
import PickerItem from "../components/PickerItem";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
export default function ListingEditScreen() {
  return (
    <Screen>
      <View style={styles.containerInputs}>
        <AppTextInput placeholder="Title" />
        <AppTextInput placeholder="Price" />
        <PickerItem />
        <AppTextInput placeholder="Descprition" />
        <AppButton title="Register" />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  containerInputs: {
    padding: 25,
  },
});
