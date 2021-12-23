// In App.js in a new project

import * as React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { getDatabase, ref, onValue } from "@firebase/database";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Firebase from "../config/firebase";
import SearchBar from "../components/SearchBar";
import BookComp from "../components/BookComp";
import { TouchableOpacity } from "react-native-gesture-handler";
import CircularProgressTracker from "../components/CircularProgressTracker";

const auth = Firebase.auth();
const db = getDatabase(Firebase);

export default function BrowseBooks({ navigation }) {
  const [breload, setbReload] = React.useState(false);
  const [bisLoaded, setbLoaded] = React.useState(false);
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    setbReload(false);
    var returnArr = [];
    const reference = ref(db, "books/");
    onValue(reference, async (snapshot) => {
      returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      setBooks(returnArr);
      setbLoaded(true);
      setbReload(false);
    });
    console.log(returnArr.length);
    if (returnArr.length === 0) {
      setbReload(true);
    }
  }, [breload]);

  // console.log('post length '+posts.length)
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight,
        flex: 1,
      }}
    >
      <SearchBar inpColor={"white"} />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          paddingLeft: 10,
        }}
      >
        {bisLoaded === true ? (
          books.map((element, index) => (
            <TouchableOpacity
              key={index}
              //onPress={() => navigation.navigate("Post Details", element)}
            >
              <BookComp style={{}} key={index} bookInfo={element} />
            </TouchableOpacity>
          ))
        ) : (
          <CircularProgressTracker />
        )}
      </ScrollView>
    </View>
  );
}
