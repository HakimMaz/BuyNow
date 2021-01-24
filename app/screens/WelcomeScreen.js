import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
function WelcomeScreen(props) {
  return (
    // <ImageBackground
    //   source={require("../assets/background.jpg")}
    //   style={styles.background}
    //   blurRadius={3} // to blur image
    // >
    //   <View style={styles.logocontainer}>
    //     <Image style={styles.logo} source={require("../assets/logo.png")} />
    //     <Text style={styles.tagLine}> Sell what you don't need</Text>
    //   </View>
    //   <View style={styles.buttonsContainer}>
    //     <AppButton title="LOGIN" />
    //     <AppButton title="REGISTER" color="secondary" />
    //   </View>
    // </ImageBackground>
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Chair"
    //     subtitle="$12"
    //     image={require("../assets/chair2.jpg")}
    //   />
    // </View>
    <ListingDetailsScreen />
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logocontainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
  },
  textButton: {
    padding: 20,
    textAlign: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
