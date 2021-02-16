import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../AppButton";
export default function SubmitButton({ title }) {
  const { handleSubmit, values } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={() => console.log("valeur form", values)}
    />
  );
}
