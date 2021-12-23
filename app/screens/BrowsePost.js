// In App.js in a new project

import * as React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { getDatabase, ref, onValue } from "@firebase/database";
import Firebase from "../config/firebase";
import SearchBar from "../components/SearchBar";
import PostComp from "../components/PostComp";
import CircularProgressTracker from "../components/CircularProgressTracker";

const auth = Firebase.auth();
const db = getDatabase(Firebase);

export default function BrowsePost({ navigation }) {
  const [reload, setReload] = React.useState(false);
  const [isLoaded, setLoaded] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    setReload(false);
    var returnArr = [];
    var postArr = [];
    const reference = ref(db, "posts/");
    onValue(reference, async (snapshot) => {
      var l = snapshot.size;
      console.log(l);
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        const breference = ref(getDatabase(), "books/" + item["bookId"]);
        onValue(breference, async (booksnapshot) => {
          returnArr.push({ ...item, ...booksnapshot.val() });
          l--;
          if (l <= 0) {
            setPosts(returnArr);
            setLoaded(true);
            setReload(false);
          }
        });
      });
      console.log(returnArr.length);
      if (returnArr.length === 0) {
        setReload(true);
      }
    });
  }, [reload]);

  // console.log('post length '+posts.length)
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
      }}
    >
      <SearchBar inpColor="white" />

      <ScrollView style={{}}>
        {isLoaded === true ? (
          posts.map((element, index) => (
            <PostComp key={index} postInfo={element} />
          ))
        ) : (
          <CircularProgressTracker />
        )}
      </ScrollView>
    </View>
  );
}
