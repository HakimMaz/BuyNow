import React, { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { Image, StyleSheet, View, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as yup from "yup";
import AppText from "../components/AppText";
import Colors from "../config/colors";
import ErrorsMesage from "../components/ErrorsMesage";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(5).label("Password"),
});
export default function LoginScreen() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [visibleErrorEmail, setVisibleErrorEmail] = useState(false);
  const [visibleErrorPassword, setVisibleErrorPassword] = useState(false);

  const focusInput = (name) => {
    console.log("hello email input : => ", name);
    switch (name) {
      case "email":
        setVisibleErrorEmail(true);
        break;
      case "password":
        setVisibleErrorPassword(true);
        break;
    }

    //console.log("hello focus => ", name.currentTarget);
    // switch (e.target.name) {
    //   case "email":
    //     break;

    //   case "password":
    //     break;
    // }
    //setVisible(True);
  };

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
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            validate,
          }) => (
            <React.Fragment>
              <AppTextInput
                autoCapitilize="none"
                autoCorrect={true}
                keyboardType="email-address"
                icon="email"
                placeholder="email"
                onBlur={handleBlur("email")}
                //onFocus={() => focusInput("email")}
                onChangeText={handleChange("email")}
              />

              <ErrorsMesage error={errors.email} visible={touched.email} />
              <AppTextInput
                name="password"
                icon="locked"
                placeholder="password"
                //onFocus={() => focusInput("password")}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                isSecure={true}
              />

              <ErrorsMesage
                error={errors.password}
                visible={touched.password}
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
  },

  containerInputs: {
    marginVertical: 200,
    padding: 25,
    width: "100%",
  },
});
