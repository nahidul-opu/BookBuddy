import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "@firebase/database";
import Firebase from "../config/firebase";
import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function PostComp({ postInfo }) {
  return (
    <TouchableOpacity style={styles.postContainer}>
      <Image source={{ uri: postInfo.bookCover }} style={styles.bookImage} />
      <View style={styles.bookDetail}>
        <Text
          style={{
            fontSize: 25,
            marginBottom: 5,
          }}
        >
          {postInfo.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "blue",
            marginBottom: 5,
          }}
        >
          {postInfo.author}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "gray",
            marginBottom: 5,
            // marginRight: 3,
            width: "100%",
            // backgroundColor: 'blue',
            textAlign: "justify",
          }}
        >
          {postInfo.description && postInfo.description.length >= 340
            ? postInfo.description.slice(0, 340) + "..."
            : postInfo.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.soft, //'#ebebeb',
    width: "100%",
    // height: 200,
    minHeight: 200,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    marginBottom: 15,
    padding: 5,
  },

  bookImage: {
    height: "100%",
    width: "40%",
    // margin: 5
    //marginRight: 10
    borderRadius: 10,
  },
  bookDetail: {
    backgroundColor: colors.soft, //'#ebebeb',
    height: "100%",
    width: "56%",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    // margin: 5,
    marginLeft: 10,
  },
});
