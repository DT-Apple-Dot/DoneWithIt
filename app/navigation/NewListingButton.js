import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="plus-circle"
        color={colors.white}
        size={40}
      />
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    height: 80,
    width: 80,
    bottom: 30,
  },
});
