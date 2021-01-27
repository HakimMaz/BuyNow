import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Colors from "../config/colors";
export default function ListingsScreen() {
  const ListProduct = [
    {
      id: 1,
      title: "Chair Relaxing Odoo",
      price: "$180",
      image: require("../assets/chair.jpg"),
    },
    {
      id: 2,
      title: "Night table Luxe",
      price: "$402",
      image: require("../assets/nighttable.jpg"),
    },
    {
      id: 1,
      title: "Book Table by MindMoon",
      price: "$180",
      image: require("../assets/booktable.jpg"),
    },
  ];
  const renderItem = ({ item }) => (
    <Card title={item.title} subtitle={item.price} image={item.image} />
  );

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={ListProduct}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: Colors.light,
  },
});
