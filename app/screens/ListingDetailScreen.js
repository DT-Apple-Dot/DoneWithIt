import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
export default function ListingDetailScreen({ route }) {
  const lising = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: lising.images[0].thumbnailUrl }}
        uri={lising.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{lising.title}</Text>
        <Text style={styles.price}>${lising.price}</Text>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="DT Apple Dot"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 300,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },

  userContainer: {
    marginVertical: 40,
  },
});
