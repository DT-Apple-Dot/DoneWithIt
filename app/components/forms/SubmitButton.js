/** @format */

import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppButtom from "../Buttom";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButtom title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
