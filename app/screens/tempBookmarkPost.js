import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullPost1 from "./FullPost1";
import Bookmarks from "./Bookmarks";

const StackPost = createNativeStackNavigator();

const tempBookmarkPost = () => {
  return (
    <NavigationContainer independent={true}>
      <StackPost.Navigator
        initialRouteName="Browse Post"
        screenOptions={{ headerShown: true }}
      >
        <StackPost.Screen name="Bookmarks" component={Bookmarks} />
        <StackPost.Screen name="Bookmarked Posts" component={FullPost1} />
      </StackPost.Navigator>
    </NavigationContainer>
  );
};

export default tempBookmarkPost;
