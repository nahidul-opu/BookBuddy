import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Button,
  ScrollView,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ref, getDatabase, onValue, set } from "@firebase/database";
import React, { useState, useEffect } from "react";
import colors from "../config/colors";
import PostDetailComponent from "../components/PostDetailComponent";
import CommentComp from "../components/CommentComp";
import Firebase from "../config/firebase";

const auth = Firebase.auth();

const FullPost = ({ route, navigation }) => {
  const postInformation = route.params;
  const [newComment, setNewCom] = useState("");
  const [userData, setuserData] = useState(null);
  const [bookmarked, setBookmarked] = useState(null);
  const [postOwner, setPostOwner] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const poreference = ref(
      getDatabase(Firebase),
      "users/" + postInformation.userId
    );
    onValue(poreference, async (usnapshot) => {
      var uu = usnapshot.val();
      setPostOwner(uu);
    });

    const reference = ref(
      getDatabase(Firebase),
      "users/" + auth.currentUser.uid
    );
    onValue(reference, async (snapshot) => {
      var u = await snapshot.val();
      setuserData(u);
      if (u["bookmarks"] === null || u["bookmarks"] === undefined) {
        setBookmarked(false);
      } else if (u["bookmarks"].includes(postInformation.key)) {
        setBookmarked(true);
      } else {
        setBookmarked(false);
      }
    });

    const creference = ref(
      getDatabase(Firebase),
      "comments/" + postInformation.key
    );
    var comArr = [];
    onValue(creference, async (snapshot) => {
      var l = snapshot.size;
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        comArr.push(item);
        l--;
        if (l <= 0) {
          setComments(comArr);
        }
      });
    });
  }, [newComment]);

  function addBookMark() {
    // console.log("clickeddddddddddddddddddddddddddddddddddd");
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

  function postComment() {
    if (newComment !== "") {
      const comRef = ref(
        getDatabase(Firebase),
        "comments/" +
          postInformation.key +
          "/" +
          auth.currentUser.uid +
          Date.now()
      );
      set(comRef, {
        commentor: userData.name,
        commentorId: auth.currentUser.uid,
        comment: newComment,
      });
    }
    setNewCom("");
  }

  /*console.log(
    "full post %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n",
    postInformation
  );*/

  const BookMark = () => {
    return (
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 50,
          borderColor: "black",
          borderWidth: 0.1,
        }}
        onPress={() => addBookMark()}
      >
        <AntDesign name="star" size={30} color="black" />
      </TouchableOpacity>
    );
  };

  const UnBookMark = () => {
    return (
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 50,
          borderColor: "black",
          borderWidth: 0.1,
        }}
        onPress={() => addBookMark()}
      >
        <AntDesign name="staro" size={30} color="black" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{}}>
      <ScrollView>
        <View
          style={{
            // backgroundColor: "blue", //'#ebebeb',
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
              // backgroundColor: "green",
              position: "relative",
              top: 20,
            }}
          >
            <FontAwesome name="user-circle-o" size={70} color="black" />

            <Text
              style={{
                fontSize: 20,
                color: "blue",
                width: 200,
                marginLeft: 20,
              }}
            >
              {postOwner ? postOwner.name : postInformation.userId}
              {/* {bookmarked !== null ? (
                <Button
                  onPress={() => addBookMark()}
                  title={bookmarked ? "-" : "+"}
                  size={28}
                />
              ) : null} */}
            </Text>

            {/* {bookmarked !== null ? (
              <Button
                onPress={() => addBookMark()}
                title={bookmarked ? "-" : "+"}
                size={28}
              />
            ) : null} */}

            {bookmarked !== null ? (
              bookmarked ? (
                <BookMark />
              ) : (
                <UnBookMark />
              )
            ) : null}
          </View>

          <PostDetailComponent postInfo={postInformation} />
          <TouchableOpacity
            style={{
              backgroundColor: "#F38BA0",
              padding: 5,
              position: "relative",
              top: 50,
              borderRadius: 30,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-close-circle" size={20} color="#FFBCBC" />
            <Text style={{ fontSize: 15, color: "#FFBCBC" }}>
              Close This Post
            </Text>
          </TouchableOpacity>
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
          {comments
            ? comments.map((element, index) => (
                <CommentComp key={index} postInfo={element} />
              ))
            : null}
          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "lightgreen",
              width: "80%",
              height: 80,
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              top: 50,
              marginBottom: 50,

              //   left: 0,
            }}
          >
            <View
              style={{
                width: "70%",
                height: 60,
                backgroundColor: "#e0e9eb",
                // position: "relative",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                borderWidth: 0.05,
                borderColor: "blue",
                // top: 100,
                // left: 0,
              }}
            >
              <TextInput
                placeholder="add a comment"
                style={{ fontSize: 15, marginRight: 30 }}
                value={newComment}
                onChangeText={(text) => setNewCom(text)}
              />
            </View>
            <TouchableOpacity
              style={{
                height: 53,
                width: 53,
                borderRadius: 100,
                // backgroundColor: "blue",
                borderWidth: 0.5,
                // padding: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <MaterialCommunityIcons
                name="send-circle"
                size={50}
                color="black"
                onPress={() => postComment()}
                // style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
