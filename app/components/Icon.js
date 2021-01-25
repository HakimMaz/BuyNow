import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
export default function Icon({ name, size, iconColor, backgroundColor }) {
  return (
    <View
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}
