import React, { useState, useEffect } from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { Image, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(100);
  useEffect(() => {}, size);
  return (
    <Screen style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          style={{
            width: size,
            height: size,
            alignSelf: "center",
          }}
          source={require("../assets/logo.png")}
        />
      </View>
      <View>
        <View style={styles.containerInputs}>
          <AppTextInput
            icon="email"
            placeholder="email"
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
            onFocus={() => {
              console.log("size==>", size);
              setSize(80);
              console.log("size==>", size);
            }}
          />
          <AppTextInput
            icon="locked"
            placeholder="password"
            onChangeText={(password) => setPassword(password)}
            defaultValue={password}
            isSecure={true}
          />
          <AppButton
            title="Login"
            onPress={() => console.log("email is : ", email + "=>" + password)}
          />
        </View>
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
    top: 70,
  },

  tagLine: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 10,
  },
  containerInputs: {
    marginVertical: 200,
    padding: 25,
  },
});
