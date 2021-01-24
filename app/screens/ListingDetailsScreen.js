import React from "react";
import AppText from "../components/AppText";
import { View, Image, StyleSheet } from "react-native";
import Colors from "../config/colors";
import ListItem from "../components/ListItem";
export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair2.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Chair New Model </AppText>
        <AppText style={styles.price}>$12</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/hakim.jpg")}
            title="Hakim Maz"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: Colors.secondary,
    marginTop: 10,
    fontWeight: "500",
    fontSize: 24,
  },
  userContainer: {
    marginVertical: 40,
  },
});
