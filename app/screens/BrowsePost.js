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
  onValue(reference, (snapshot) => {
    verified = snapshot.val();
    if (verified === false) {
    }
  });
  return verified;
}
export default function BrowsePost({ navigation }) {
  /*if (checkFirstLogin() === false) {
    navigation.navigate("Profile");
  }*/
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <PostComp />
      <PostComp />
    </View>
  );
}
