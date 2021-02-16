import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as yup from "yup";
import Screen from "../components/Screen";
import AppPicker from "../components/AppPicker";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormPicker from "../components/forms/AppFormPicker";

export default function ListingEditScreen() {
  const validationSchema = yup.object().shape({
    title: yup.string().required().min(2).label("Title"),
    price: yup.number().positive().required().min(1).max(10000).label("Price"),
    description: yup.string().label("Description"),
    category: yup.object().required().nullable().label("category"),
  });

  const categories = [
    {
      label: "Chairs",
      value: "chairs",
      backgroundColor: "#ff9292",
      icon: { name: "apps" },
    },
    {
      label: "Cars",
      value: "cars",
      backgroundColor: "#16c79a",
      icon: { name: "car" },
    },
    {
      label: "Clothes",
      value: "clothes",
      backgroundColor: "#1687a7",
      icon: { name: "tshirt-crew" },
    },
    {
      label: "Parfumes",
      value: "parfumes",
      backgroundColor: "#fb743e",
      icon: { name: "gift" },
    },
    {
      label: "Sport",
      value: "sport",
      backgroundColor: "#a4ebf3",
      icon: { name: "volleyball" },
    },
    {
      label: "Photos",
      value: "photos",
      backgroundColor: "#eabf9f",
      icon: { name: "camera-outline" },
    },
    {
      label: "Cake",
      value: "cake",
      backgroundColor: "#99bbad",
      icon: { name: "cupcake" },
    },
  ];
  const [selectedItem, setSelectedItem] = useState("Category");
  const handleselectedItem = (item) => {
    console.log(item);
  };
  return (
    <Screen>
      <View style={styles.containerInputs}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField maxLength={255} placeholder="Title" name="title" />
          <AppFormField
            keyboardType="numeric"
            placeholder="Price"
            name="price"
            maxLength={255}
            width={120}
          />

          <AppPicker
            numberOfColumns={3}
            selectedItem={selectedItem}
            PickerItemComponent={CategoryPickerItem}
            onSelectItem={(item) => setSelectedItem(item)}
            items={categories}
            placeholder="Category"
          />
          <AppFormField
            name="description"
            maxLength={255}
            placeholder="Descprition"
            numberOfLine={3}
          />
          <SubmitButton title="Post" />
        </AppForm>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  containerInputs: {
    padding: 25,
  },
});
