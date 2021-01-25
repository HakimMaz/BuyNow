import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
export default function ListItem({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.propertiesContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
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
