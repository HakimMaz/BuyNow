import React from "react";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { View, StyleSheet } from "react-native";

export default function RegisterScreen() {
  return (
    <Screen>
      <View style={styles.containerInputs}>
        <AppTextInput icon="male" placeholder="username" />
        <AppTextInput icon="email" placeholder="email" />
        <AppTextInput icon="locked" placeholder="password" />
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
