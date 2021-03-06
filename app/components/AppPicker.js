import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, StyleSheet, View, Button, FlatList } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Colors from "../config/colors";
import AppText from "./AppText";
import ListItem from "./ListItem";
import ListItemSeparator from "./ListItemSeparator";
import PickerItem from "./PickerItem";
import Screen from "./Screen";
import { useFormikContext } from "formik";
import ErrorsMessage from "../components/forms/ErrorsMesage";

export default function AppPicker({
  icon,
  items,
  name,
  selectedItem,
  onSelectItem,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  placeholder,
  width = "100%",
}) {
  const [open, setOpen] = useState(false);
  const { errors, touched, values } = useFormikContext();
  const handleModal = async () => {
    await setOpen(!open);
    console.log("hello modal : =>", open);
  };

  const renderItem = ({ item }) => (
    <View>
      <PickerItem
        label={item.label}
        onPress={() => {
          console.log(" item selectionne: ", item);
        }}
      />
      <ListItemSeparator />
    </View>
  );

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setOpen(true)}>
        <View style={[styles.container, { width }]}>
          <Fontisto
            name={icon}
            size={20}
            color={Colors.medium}
            style={styles.icon}
          />
          <AppText style={styles.textPicker}>
            {selectedItem === "Category" ? placeholder : selectedItem.label}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={Colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <ErrorsMessage visible={touched[name]} error={errors[name]} />
      <Modal visible={open} animationType="slide">
        <Screen>
          <Button
            title="close"
            onPress={() => {
              setOpen(false);
            }}
          />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <View>
                <PickerItemComponent
                  item={item}
                  label={item.label}
                  onPress={() => {
                    console.log(" item selectionne: ", item);
                    onSelectItem(item);
                    onSelectItem(item);
                    values.category = item.value;
                    setOpen(false);
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.value}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 30,
  },
  textPicker: {
    marginLeft: 25,
    flex: 1,
  },
  icon: {
    position: "absolute",
    marginVertical: 15,
    marginLeft: 10,
  },
});
