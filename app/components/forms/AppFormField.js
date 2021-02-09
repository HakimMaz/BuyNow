import { useFormikContext } from "formik";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorsMesage from "./ErrorsMesage";
export default function AppFormField({ name, numberOfLine, ...otherProps }) {
  const { handleChange, handleBlur, errors, touched } = useFormikContext();
  return (
    <React.Fragment>
      <AppTextInput
        onBlur={handleBlur(name)}
        //onFocus={() => focusInput("email")}onChangeText
        onChangeText={handleChange(name)}
        numberOfLine={numberOfLine}
        {...otherProps}
      />

      <ErrorsMesage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}
