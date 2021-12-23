import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import colors from "../config/colors";
import PostDetailComponent from "../components/PostDetailComponent";

const CommentComp = () => {
  return (
    <View
      style={{
        width: "95%",
        flexDirection: "row",
        position: "relative",
        left: 20,
        top: 40,
      }}
    >
      <FontAwesome5 name="user-circle" size={50} color="black" />
      <View
        style={{
          //   height: 80,
          width: "60%",
          backgroundColor: "#f2f2f2",
          marginLeft: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "blue",
            position: "relative",
            top: 5,
            left: 2,
          }}
        >
          {"Sabiha Islam Munshat"}
        </Text>
        <Text
          style={{
            position: "relative",
            top: 5,
            left: 20,
            width: "90%",
            // height: "100%",
            // backgroundColor: "red",
            marginBottom: 10,
            flexShrink: 1,
            textAlign: "justify",
          }}
        >
          {
            'I have a book titled "Maa" written by anisul islam.I have a book titled "Maa" written by anisul islamI have a book titled "Maa" written by anisul islam'
          }
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
          backgroundColor: "orange",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: 10,
          left: 10,
        }}
      >
        <FontAwesome name="exchange" size={24} color="black" />
      </View>
    </View>
  );
};

export default CommentComp;
