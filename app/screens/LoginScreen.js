import React, { useState } from "react";
import Screen from "../components/Screen";
import { Image, StyleSheet, View } from "react-native";
import * as yup from "yup";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";
import AppPicker from "../components/AppPicker";
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(5).label("Password"),
});

export default function LoginScreen() {
  const categories = [
    { label: "Chairs", value: "chairs" },
    { label: "Cars", value: "cars" },
    { label: "Clothes", value: "clothes" },
    { label: "Jewellery", value: "jewellery" },
  ];
  const [selectedItem, setSelectedItem] = useState(categories[0]);
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  // const [visibleErrorEmail, setVisibleErrorEmail] = useState(false);
  //const [visibleErrorPassword, setVisibleErrorPassword] = useState(false);

  // const focusInput = (name) => {
  //   console.log("hello email input : => ", name);
  //   switch (name) {
  //     case "email":
  //       setVisibleErrorEmail(true);
  //       break;
  //     case "password":
  //       setVisibleErrorPassword(true);
  //       break;
  //   }
  //};

  return (
    <Screen style={styles.container}>
      <View style={styles.containerInputs}>
        <Image
          style={{
            width: 80,
            height: 80,
            marginBottom: 20,
            alignSelf: "center",
          }}
          source={require("../assets/logo.png")}
        />
        <AppForm
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitilize="none"
            autoCorrect={true}
            keyboardType="email-address"
            icon="email"
            placeholder="email"
            name="email"
          />

          <AppFormField
            name="password"
            icon="locked"
            placeholder="password"
            //onFocus={() => focusInput("password")}
            isSecure={true}
          />
          <SubmitButton title="login" />
        </AppForm>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logocontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  containerInputs: {
    marginVertical: 200,
    padding: 25,
    width: "100%",
  },
});
