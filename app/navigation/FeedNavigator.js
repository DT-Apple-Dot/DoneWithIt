import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
    <Stack.Screen name="Listings" component={ListingsScreen}/>
    <Stack.Screen name="ListingsDetails" component={ListingDetailScreen}/>
  </Stack.Navigator>
)

export default FeedNavigator;