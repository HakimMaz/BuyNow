import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
  adroidSafeArea: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
// you can avoid this using Constants of expo
