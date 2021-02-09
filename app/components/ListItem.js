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
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={Colors.medium}
            style={styles.materialIcon}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: Colors.medium,
  },
  // materialIcon: {
  //   justifyContent: "center",
  //   alignContent: "center",
  //   marginLeft: "60%",
  //   marginVertical: 20,
  // },
});
