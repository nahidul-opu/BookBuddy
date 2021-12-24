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
import { TouchableHighlight } from "react-native-gesture-handler";

const CommentComp = (comment) => {
  comment = comment["postInfo"];
  console.log(comment);
  return (
    <View
      style={{
        width: "85%",
        flexDirection: "row",
        position: "relative",
        // backgroundColor: "red",
        left: 20,
        top: 40,
        marginBottom: 10,

        borderRadius: 25,
      }}
    >
      <FontAwesome5 name="user-circle" size={50} color="black" />
      <View
        style={{
          //   height: 80,
          width: "70%",
          backgroundColor: colors.input,
          marginLeft: 10,
          borderRadius: 10,
          borderWidth: 0.3,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "blue",
            position: "relative",
            top: 5,
            left: 5,
          }}
        >
          {comment ? comment.commentor : null}
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
            // marginRight: 10,
            // flexShrink: 1,
            textAlign: "justify",
          }}
        >
          {comment ? comment.comment : null}
        </Text>
      </View>

      {/* <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
          backgroundColor: "#CDDEFF",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: 10,
          left: 10,
          borderWidth: 0.5,
        }}
      >
        <FontAwesome name="exchange" size={24} color="black" />
      </TouchableOpacity> */}
    </View>
  );
};

export default CommentComp;
