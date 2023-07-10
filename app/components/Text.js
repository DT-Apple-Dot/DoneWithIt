import { Text } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";

function AppText({ children, style, ...otherPops }) {
  return <Text style={[defaultStyles.text, style]} {...otherPops}>{children}</Text>;
}

export default AppText;
