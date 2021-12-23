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

export default function PostComp({ postInfo }) {
  console.log(postInfo);
  return (
    <TouchableOpacity style={styles.postContainer}
      onPress={
        // navigation.navigate(FullPost)
        console.log('pressed')
      }>
      <Image source={{ uri: postInfo.bookCover }} style={styles.bookImage} />
      <View style={styles.bookDetail}>
        <Text
          style={{
            fontSize: 30,
            marginBottom:5,
          }}
        >
          {postInfo.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "blue",
            marginBottom:5,
          }}
        >
          {postInfo.author}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "gray",
            marginBottom:5,
            // marginRight: 3,
            width: '85%',
            // backgroundColor: 'blue',
            textAlign: 'justify'
          }}
        >
          {postInfo.description.slice(0,350)+'...'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    
    // marginLeft:20,
    // marginRight:20,
    marginBottom: 15,

    
  },

  bookImage: {
    height: 200,
    width: "40%",
    // margin: 5
    //marginRight: 10
    borderRadius: 10
  },
  bookDetail: {
    backgroundColor: 'white',
    height: "100%",
    width: "55%",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 5,
    
  },
});
