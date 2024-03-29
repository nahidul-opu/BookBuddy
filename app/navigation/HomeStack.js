import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BooksView from "../screens/BooksView";
import AddPost from "../screens/AddPost";
import tempPost from "../screens/tempPost";
import tempBookmarkPost from "../screens/tempBookmarkPost";
import colors from "../config/colors";
import tempHistory from "../screens/tempHistory";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Posts"
        component={tempPost}
        options={{
          title: "Posts",
          tabBarIcon: ({ tintColor, focused }) => (
            <FontAwesome5
              name={focused ? "squarespace" : "squarespace"}
              color={focused ? "#00c9cc" : "black"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={BooksView}
        options={{
          title: "Books",
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "bookshelf" : "bookshelf"}
              color={focused ? "#00c9cc" : "black"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          title: "Add Post",
          tabBarIcon: ({ tintColor, focused }) => (
            <Entypo
              name={focused ? "plus" : "plus"}
              color={focused ? "#00c9cc" : "black"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={tempBookmarkPost}
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ tintColor, focused }) => (
            <Foundation
              name={focused ? "book-bookmark" : "book-bookmark"}
              color={focused ? "#00c9cc" : "black"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={tempHistory}
        options={{
          title: "Profile",
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign
              name={focused ? "user" : "user"}
              color={focused ? "#00c9cc" : "black"}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
