import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
export default function App() {
  console.log("app executed");

  return (
    //<WelcomeScreen />
    //<ViewImageScreen />
    //<MessagesScreen />
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}
