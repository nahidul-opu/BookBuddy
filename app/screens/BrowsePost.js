// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { getDatabase, ref, onValue } from "@firebase/database";
import Firebase from "../config/firebase";
import SearchBar from "../components/SearchBar";
import PostComp from "../components/PostComp";

const auth = Firebase.auth();

function checkFirstLogin() {
  const db = getDatabase(Firebase);
  const reference = ref(db, "users/" + auth.currentUser.uid + "/verified");
  var verified = true;
  onValue(reference, async (snapshot) => {
    verified = await snapshot.val();
    if (verified === false) {
    }
  });
  return verified;
}

function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function (childSnapshot) {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;
    var bookItem;
    const db = getDatabase(Firebase);
    const reference = ref(db, "books/" + item["bookId"]);
    onValue(reference, (snapshot) => {
      bookItem = snapshot.val();
    });
    returnArr.push({ ...item, ...bookItem });
  });

  return returnArr;
}

export default function BrowsePost({ navigation }) {
  /*if (checkFirstLogin() === false) {
    navigation.navigate("Profile");
  }*/

  const [isLoaded, setLoaded] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const db = getDatabase(Firebase);
    const reference = ref(db, "posts/");
    onValue(reference, async (snapshot) => {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        var bookItem;
        const db = getDatabase(Firebase);
        const reference = ref(db, "books/" + item["bookId"]);
        onValue(reference, async (snapshot) => {
          bookItem = snapshot.val();
        });
        returnArr.push({ ...item, ...bookItem });
      });
      setPosts(returnArr);
      setLoaded(true);
    });
  }, []);
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      {isLoaded === true
        ? posts.map((element, index) => <PostComp postInfo={element} />)
        : null}
    </View>
  );
}
