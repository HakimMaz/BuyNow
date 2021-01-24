import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Colors from "../config/colors";
import AppText from "./AppText";
export default function ListItem({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.propertiesContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  propertiesContainer: {
    marginLeft: 10,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: Colors.medium,
  },
});
