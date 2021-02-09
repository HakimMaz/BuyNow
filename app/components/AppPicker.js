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

export default function AppPicker({
  icon,
  items,
  selectedItem,
  onSelectItem,
  placeholder,
}) {
  const [open, setOpen] = useState(false);
  const handleModal = async () => {
    await setOpen(!open);
    console.log("hello modal : =>", open);
  };

  const renderItem = ({ item }) => (
    <View>
      <PickerItem
        label={item.label}
        onPress={() => {
          onSelectItem(item);
          setOpen(false);
        }}
      />
      <ListItemSeparator />
    </View>
  );

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setOpen(true)}>
        <View style={styles.container}>
          <Fontisto
            name={icon}
            size={20}
            color={Colors.medium}
            style={styles.icon}
          />
          <AppText style={styles.textPicker}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={Colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

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
            renderItem={renderItem}
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
    width: "100%",
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
