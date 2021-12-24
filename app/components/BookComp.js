import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import React from "react";
import colors from "../config/colors";
import FullPost from "../screens/FullPost";

export default function PostComp({ bookInfo }) {
  return (
    <TouchableOpacity style={styles.postContainer}>
      <Image source={{ uri: bookInfo.bookCover }} style={styles.bookImage} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#f2f2f2", //'#ebebeb',
    width: 160,
    height: 230,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0.5,
    margin: "4%",
    padding: 5,
  },

  bookImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    // margin: 5
    //marginRight: 10
    borderRadius: 10,
  },
});
