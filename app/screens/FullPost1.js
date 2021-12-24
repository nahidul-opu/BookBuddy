import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Button,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import { ref, getDatabase, onValue, set } from "@firebase/database";
import React, { useState, useEffect } from "react";
import colors from "../config/colors";
import PostDetailComponent from "../components/PostDetailComponent";
import CommentComp from "../components/CommentComp";
import Firebase from "../config/firebase";

const auth = Firebase.auth();

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

const FullPost1 = ({ route, navigation }) => {
  const postInformation = route.params;

  const [userData, setuserData] = useState(null);
  const [bookmarked, setBookmarked] = useState(null);
  useEffect(() => {
    const reference = ref(
      getDatabase(Firebase),
      "users/" + auth.currentUser.uid
    );
    onValue(reference, async (snapshot) => {
      var u = await snapshot.val();
      console.log(u);
      console.log(postInformation.key);
      setuserData(u);
      if (u["bookmarks"] === null || u["bookmarks"] === undefined) {
        setBookmarked(false);
      } else if (u["bookmarks"].includes(postInformation.key)) {
        setBookmarked(true);
      } else {
        setBookmarked(false);
      }
    });
  }, []);

  function addBookMark() {
    if (userData === null) return;
    if (bookmarked === false) {
      if (
        userData["bookmarks"] === null ||
        userData["bookmarks"] === undefined
      ) {
        userData["bookmarks"] = [postInformation.key];
      } else {
        userData["bookmarks"].push(postInformation.key);
      }
      setBookmarked(true);
    } else if (
      userData["bookmarks"] !== null &&
      userData["bookmarks"] !== undefined
    ) {
      const index = userData["bookmarks"].indexOf(postInformation.key);
      if (index > -1) {
        userData["bookmarks"].splice(index, 1);
      }
      setBookmarked(false);
    }
    const reference = ref(
      getDatabase(Firebase),
      "users/" + auth.currentUser.uid
    );
    set(reference, userData);
  }

  /*console.log(
    "full post %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n",
    postInformation
  );*/
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
          {bookmarked !== null ? (
            <Button
              onPress={() => addBookMark()}
              title={bookmarked ? "-" : "+"}
              size={28}
            />
          ) : null}
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

export default FullPost1;
