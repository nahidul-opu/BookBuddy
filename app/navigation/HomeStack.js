import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Profile from "../screens/Profile";
import BrowsePost from "../screens/BrowsePost";
import AddPost from "../screens/AddPost";
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
        component={BrowsePost}
        options={{
          title: "Posts",
          tabBarIcon: ({ tintColor, focused }) => (
            <FontAwesome5
              name={focused ? "squarespace" : "squarespace"}
              color={focused ? "blue" : "black"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={AddPost}
        options={{
          title: "Books",
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "bookshelf" : "bookshelf"}
              color={focused ? "blue" : "black"}
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
              color={focused ? "blue" : "black"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={AddPost}
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ tintColor, focused }) => (
            <Foundation
              name={focused ? "book-bookmark" : "book-bookmark"}
              color={focused ? "blue" : "black"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign
              name={focused ? "user" : "user"}
              color={focused ? "blue" : "black"}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
