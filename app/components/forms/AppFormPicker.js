import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorsMesage from "./ErrorsMesage";
export default function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldTouched, touched, values } = useFormikContext();
  return (
    <React.Fragment>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldTouched(item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      //
      <ErrorsMesage visible={touched[name]} error={errors[name]} />
    </React.Fragment>
  );
}
