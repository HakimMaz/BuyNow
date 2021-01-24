import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
export default function MessagesScreen() {
  const messages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/hakim.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/user2.jpg"),
    },
    {
      id: 3,
      title: "T3",
      description: "D3",
      image: require("../assets/user3.jpg"),
    },
  ];
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
