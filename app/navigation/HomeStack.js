import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PostsScreen from "../screens/PostsScreen";
import AddPost from "../screens/AddPost";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
} from "@expo/vector-icons";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          ></TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
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
        component={AddPost}
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
/*<Tab.Screen
name="AddPost"
component={AddPost}
options={{
  title: " ",
  tabBarIcon: ({ color, size }) => (
    <Entypo name="plus" size={24} color="black" />
  ),
}}
/>
<Tab.Screen
name="Bookmarks"
component={AddPost}
options={{
  title: " ",
  tabBarIcon: ({ color, size }) => (
    <Foundation name="book-bookmark" size={24} color="black" />
  ),
}}
/>
<Tab.Screen
name="Profile"
component={AddPost}
options={{
  title: " ",
  tabBarIcon: ({ color, size }) => (
    <AntDesign name="user" size={24} color="black" />
  ),
}}
/>*/
