import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function AccountScreen() {
  const menuItems = [
    {
      id: 1,
      title: "My listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      id: 2,
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];
  const renderItem = ({ item }) => (
    <ListItem title={item.title} icon={item.icon} />
  );

  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="hakim"
          subtitle="maz.hakim93@gmail.com"
          image={require("../assets/hakim.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
