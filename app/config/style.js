import { Platform } from "react-native";
import Colors from "./colors";

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.dark,
  },
};
