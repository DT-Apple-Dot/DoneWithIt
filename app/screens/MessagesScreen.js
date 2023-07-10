import { StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/lists/ListItem";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Jennie",
    description: "Hey! Is this item still avaiable?",
    image: require("../assets/jennie.jpg"),
  },

  {
    id: 2,
    title: "Jennie",
    description: "I'm interested this item. When will you be able to post this",
    image: require("../assets/jennie.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete= (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  
  return (
    <Screen> 
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={ () =>
          { setMessages([
            {
              id: 2,
              title: "Jennie",
              description: "I'm interested this item. When will you be able to post this",
              image: require("../assets/jennie.jpg")
            }
          ])} 
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
