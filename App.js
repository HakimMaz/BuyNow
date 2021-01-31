import React, { useState } from "react";
import { View, Switch } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import Colors from "./app/config/colors";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
export default function App() {
  console.log("app executed");
  const [x, setX] = useState(false);
  const categories = [
    { label: "Chairs", value: "chairs" },
    { label: "Cars", value: "cars" },
    { label: "Clothes", value: "clothes" },
    { label: "Jewellery", value: "jewellery" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0].label);

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
    //<ListingsScreen />
    <Screen>
      <AppTextInput icon="email" placeholder="email" />
      <AppTextInput icon="email" placeholder="email" />
      <Switch value={x} onValueChange={(y) => setX(y)} />
      <AppPicker
        selectedCategory={selectedCategory}
        onSelecteCategory={() => setSelectedCategory(selectedCategory)}
        categories={categories}
        icon="list-2"
        placeholder="Category"
      />
    </Screen>
  );
}
