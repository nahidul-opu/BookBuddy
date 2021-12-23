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
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import colors from "../config/colors";
import PostDetailComponent from "../components/PostDetailComponent";
import CommentComp from "../components/CommentComp";

const PostDetails = ({ postInfo }) => {
  console.log("here here");
  console.log(postInfo);
  console.log(postInfo.bookCover);
  return (
    <View
      style={{
        height: 500,
        width: "100%",
        backgroundColor: "blue",
      }}
    >
      <Image source={{ uri: postInfo.bookCover }} />
      <Text>Hello</Text>
    </View>
  );
};

const FullPost = ({ route, navigation }) => {
  const postInformation = route.params;
  console.log(
    "full post %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n",
    postInformation
  );
  return (
    <View
      style={{
        backgroundColor: "blue", //'#ebebeb',
        width: "100%",
        // height: "100%",
        borderRadius: 10,
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        // justifyContent: "center",

        // marginBottom: 15,
        // padding: 5,
      }}
    >
      <View
        style={{
          // alignItems: 'center'
          //   top: 30,
          alignItems: "center",
          //   justifyContent: "space-between",
          flexDirection: "row",
          //   top: 30,
          // margin: 10,
          //   left: 10,
          // width: "80%",
          backgroundColor: "green",
          position: "relative",
          top: 20,
        }}
      >
        <FontAwesome name="user-circle-o" size={70} color="black" />

        <Text
          style={{ fontSize: 20, color: "blue", width: 200, marginLeft: 20 }}
        >
          {"A S M Mofakkharul Islam"}
        </Text>
      </View>

      <PostDetailComponent postInfo={postInformation} />

      <View
        style={{
          //   backgroundColor: "yellow",
          height: 60,
          width: 350,
          justifyContent: "center",
          position: "relative",
          top: 50,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 35,
          }}
        >
          Comments:
        </Text>
      </View>
      <CommentComp />

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "lightgreen",
          width: "80%",
          height: 80,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          top: 50,
          //   left: 0,
        }}
      >
        <View
          style={{
            width: "60%",
            height: 60,
            backgroundColor: "yellow",
            // position: "relative",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            // top: 100,
            // left: 0,
          }}
        >
          <TextInput
            placeholder="add a comment"
            style={{ fontSize: 15, marginRight: 30 }}
          />
        </View>
        <MaterialCommunityIcons
          name="send-circle"
          size={50}
          color="black"
          style={{ marginLeft: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    // backgroundColor: '#f2f2f2',//'#ebebeb',
    flex: 1,
    // height: '100%',
    // borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    // borderWidth: 0.5,
    // justifyContent: 'center'
  },
});

export default FullPost;
