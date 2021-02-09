import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteActions from "../components/ListItemDeleteActions";
export default function MessagesScreen() {
  const initialMessages = [
    {
      id: 1,
      title: "Hakim",
      description:
        "Hello darkness my old friend, i just come here to start again , in this world softly  creeping ,again all people that want meeting ",
      image: require("../assets/hakim.jpg"),
    },
    {
      id: 2,
      title: "Mosh",
      description: "Mosh is new in yassir",
      image: require("../assets/user2.jpg"),
    },
    {
      id: 3,
      title: "Dalila",
      description: "never say never ..Believe me",
      image: require("../assets/user3.jpg"),
    },
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDeleteItem = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("hightlighted item:", item)}
            renderRightActions={() => (
              <ListItemDeleteActions onPress={() => handleDeleteItem(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => console.log("hello messages ", messages)}
      />
    </Screen>
  );
}
