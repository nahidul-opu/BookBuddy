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
            width: '100%',
            // backgroundColor: 'blue',
            textAlign: 'justify'
          }}
        >
          {postInfo.description.length >=350? postInfo.description.slice(0,350)+'...':postInfo.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#f2f2f2',//'#ebebeb',
    width: "100%",
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    marginBottom: 15,
    padding: 5
    
  },

  bookImage: {
    height: '100%',
    width: "40%",
    // margin: 5
    //marginRight: 10
    borderRadius: 10,
  },
  bookDetail: {
    backgroundColor: '#f2f2f2',//'#ebebeb',
    height: "100%",
    width: "56%",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    // margin: 5,
    marginLeft: 10
    
  },
});
