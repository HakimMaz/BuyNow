import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import Colors from "../config/colors";

import defaultStyle from "../config/style";
export default function AppTextInput({
  icon,
  placeholder,
  onChangeText,
  isSecure,
  onFocus,
  onBlur,
  numberOfLine,
  ...otherprops
}) {
  return (
    <View style={styles.container}>
      {icon && (
        <Fontisto
          name={icon}
          size={20}
          style={styles.icon}
          color={Colors.medium}
        />
      )}
      <TextInput
        style={[styles.textInput, defaultStyle.text]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        onFocus={onFocus}
        onBlur={onBlur}
        numberOfLine={numberOfLine}
        {...otherprops}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 25,
    width: "100%",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    marginLeft: 20,
    width: "100%",
  },
  icon: {
    position: "absolute",
    marginVertical: 20,
    marginLeft: 10,
  },
});
