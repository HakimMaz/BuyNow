import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Icon({
  style,
  name,
  size = 50,
  iconColor = "#fff",
  backgroundColor = "red",
}) {
  return (
    <View
      style={[
        {
          height: size,
          width: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}
