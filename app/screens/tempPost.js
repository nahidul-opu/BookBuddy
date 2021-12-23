import * as React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { getDatabase, ref, onValue } from "@firebase/database";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Firebase from "../config/firebase";
import SearchBar from "../components/SearchBar";
import PostComp from "../components/PostComp";
import BrowsePost from "./BrowsePost";
import FullPost from "./FullPost";

const StackPost = createNativeStackNavigator();

const tempPost = ()=>{
   return(
    <NavigationContainer independent={true}>
    <StackPost.Navigator initialRouteName="Browse Post">
      <StackPost.Screen name="Browse Post" component={BrowsePost} />
      <StackPost.Screen name="Post Details" component={FullPost} />
    </StackPost.Navigator>
  </NavigationContainer>
   )
}

export default tempPost;