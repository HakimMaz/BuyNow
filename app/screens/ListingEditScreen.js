import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as yup from "yup";
import Screen from "../components/Screen";
import AppPicker from "../components/AppPicker";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

export default function ListingEditScreen() {
  const validationSchema = yup.object().shape({
    title: yup.string().required().min(2).label("Title"),
    price: yup.number().positive().required().min(1).max(10000).label("Price"),
    description: yup.string().label("Description"),
    category: yup.string().label("category"),
  });

  const categories = [
    { label: "Chairs", value: "chairs" },
    { label: "Cars", value: "cars" },
    { label: "Clothes", value: "clothes" },
    { label: "Jewellery", value: "jewellery" },
  ];
  const [selectedItem, setSelectedItem] = useState(categories[0]);
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
            category: "",
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
            selectedItem={selectedItem}
            //onSelectItem={(item) => setSelectedItem(item)}
            onSelectItem={() => handleselectedItem(selectedItem.value)}
            items={categories}
            placeholder="Category"
            width="50%"
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
