import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import Colors from "./app/config/colors";
import ListingsScreen from "./app/screens/ListingsScreen";
export default function App() {
  console.log("app executed");

  return (
    //<WelcomeScreen />
    //<ViewImageScreen />
    //<MessagesScreen />
    // <Screen>
    //   <ListItem
    //     title="hakim"
    //     subtitle="adagio22@gmail.com"
    //     icon={{
    //       name: "email",
    //       color: Colors.white,
    //       backgroundColor: Colors.primary,
    //     }}
    //     //image={require("./app/assets/hakim.jpg")}
    //   />
    // </Screen>
    //<AccountScreen />
    <ListingsScreen />
  );
}
