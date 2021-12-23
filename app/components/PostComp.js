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

export default function PostComp({ postInfo }) {
  console.log(postInfo)
  return (
    <TouchableOpacity style={styles.postContainer}>
      <Image style={styles.bookImage} source={{ url: postInfo.BookCover }} />
      <View style={styles.bookDetail}>
        <Text
          style={{
            fontSize: 40,
          }}
        >
          {/* {postInfo.Title} */}
          Gitanjali
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "blue",
          }}
        >
          {/* {postInfo.Author} */}
          Rabindranath Tagore
          
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "gray",
          }}
        >
          {/* {postInfo.Description} */}
          It is a great novel wirtten by tagore.
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.primary,
    width: "95%",
    height: 300,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  bookImage: {
    height: 280,
    width: "50%",
    margin: 10,
  },
  bookDetail: {
    backgroundColor: colors.secondary,
    height: "100%",
    width: "50%",
    borderRadius: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 10,
  },
});
