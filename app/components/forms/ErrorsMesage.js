import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";
import Colors from "../../config/colors";
export default function ErrorsMesage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.textError}>{error} </AppText>;
}
const styles = StyleSheet.create({
  textError: {
    color: Colors.danger,
    fontSize: 12,
    marginLeft: 10,
  },
});
