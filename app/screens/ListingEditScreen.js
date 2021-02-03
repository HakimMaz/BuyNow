import React, { useState } from "react";
import AppPicker from "../components/AppPicker";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
export default function ListingEditScreen() {
  const categories = [
    { label: "Chairs", value: "chairs" },
    { label: "Cars", value: "cars" },
    { label: "Clothes", value: "clothes" },
    { label: "Jewellery", value: "jewellery" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <Screen>
      <View style={styles.containerInputs}>
        <AppTextInput placeholder="Title" />
        <AppTextInput placeholder="Price" />
        <AppPicker
          selectedItem={selectedCategory}
          onSelecteItem={(item) => setSelectedCategory(item)}
          categories={categories}
          icon="list-2"
          placeholder="Category"
        />
        <AppTextInput placeholder="Descprition" />
        <AppButton title="Register" />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  containerInputs: {
    padding: 25,
  },
});
