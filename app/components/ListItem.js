import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Colors from "../config/colors";
import Icon from "../components/Icon";
import AppText from "../components/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ListItem({
  title,
  subtitle,
  image,
  icon,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={styles.container}>
          {icon && (
            <Icon name={icon.name} backgroundColor={icon.backgroundColor} />
          )}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.propertiesContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
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
    backgroundColor: Colors.white,
  },
  image: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  propertiesContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: Colors.medium,
  },
});
