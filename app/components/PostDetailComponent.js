import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import React from "react";
import colors from "../config/colors";
export default function PostDetailComponent({ postInfo }) {
  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: postInfo.bookCover }} style={styles.bookImage} />
      <View style={styles.bookDetail}>
        <Text
          style={{
            fontSize: 28,
            marginBottom: 5,
          }}
        >
          {postInfo.title}
        </Text>
        <Text>{postInfo.genre + " Book"}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "black",
              // marginBottom: 5,
              margin: 5,
            }}
          >
            By
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "blue",
              // marginBottom: 5,
              margin: 5,
            }}
          >
            {postInfo.author}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 5,
          }}
        >
          <View style={{ width: "100%" }}>
            <Text
              style={{
                marginRight: 5,
                color: "#006644",
                fontSize: 14,
              }}
            >
              Location:
            </Text>
            <Text
              style={{
                // marginRight: 5,
                color: "#006644",
                fontSize: 13,
              }}
            >
              {postInfo.location}
            </Text>
          </View>
        </View>

        <ScrollView>
          <Text
            style={{
              fontSize: 10,
              color: "gray",
              marginBottom: 5,
              width: 200,
              // marginRight: 3,
              //   width: "100%",
              //   backgroundColor: "blue",
              textAlign: "justify",
            }}
          >
            {postInfo.description}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.soft, //'#ebebeb',
    width: "95%",
    minHeight: 250,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    // borderColor: "blue",
    marginBottom: 15,
    padding: 5,
    top: 50,
    position: "relative",
  },

  bookImage: {
    height: 240,
    width: "40%",
    alignSelf: "flex-start",
    // margin: 5
    //marginRight: 10
    borderRadius: 10,
  },
  bookDetail: {
    backgroundColor: colors.soft, //'#ebebeb',
    // backgroundColor: "blue",
    minHeight: 230,
    width: "55%",
    // width: 210,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    // margin: 5,
    marginLeft: 10,
  },
});
