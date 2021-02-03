import React, { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { Image, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(5).label("Password"),
});
export default function LoginScreen() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [size, setSize] = useState(100);

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
      <View style={styles.containerInputs}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <React.Fragment>
              <AppTextInput
                autoCapitilize="none"
                autoCorrect={true}
                keyboardType="email-address"
                icon="email"
                placeholder="email"
                onChangeText={handleChange("email")}
                //defaultValue={email}
                onFocus={() => {
                  console.log("size==>", size);
                  setSize(80);
                  console.log("size==>", size);
                }}
              />
              <AppTextInput
                icon="locked"
                placeholder="password"
                onChangeText={handleChange("password")}
                //defaultValue={password}
                isSecure={true}
              />

              <AppButton title="Login" onPress={() => handleSubmit()} />
            </React.Fragment>
          )}
        </Formik>
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
    width: "100%",
  },
});
