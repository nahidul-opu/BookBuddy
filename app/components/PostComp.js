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
import {
  ref as storageRef,
  getStorage,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import colors from "../config/colors";
import Firebase from "../config/firebase";

export default function PostComp({ postInfo }) {
  return (
    <TouchableOpacity style={styles.postContainer}>
      <Image
        style={styles.bookImage}
        source={require("../assets/gitanjali.png")}
      />
      <View style={styles.bookDetail}>
        <Text
          style={{
            fontSize: 40,
          }}
        >
          {postInfo.Title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "blue",
          }}
        >
          {postInfo.writer}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "gray",
          }}
        >
          {postInfo.description}
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
