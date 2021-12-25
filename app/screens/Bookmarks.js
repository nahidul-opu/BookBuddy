import * as React from "react";
import {
  RefreshControl,
  View,
  Text,
  ScrollView,
  StatusBar,
} from "react-native";
import { getDatabase, ref, onValue } from "@firebase/database";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Firebase from "../config/firebase";
import SearchBar from "../components/SearchBar";
import PostComp from "../components/PostComp";
import { TouchableOpacity } from "react-native-gesture-handler";
import CircularProgressTracker from "../components/CircularProgressTracker";
import colors from "../config/colors";

const auth = Firebase.auth();
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default function Bookmarks({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoaded, setLoaded] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  async function fetchData() {
    var returnArr = [];
    const reference = ref(
      getDatabase(Firebase),
      "users/" + auth.currentUser.uid
    );
    onValue(reference, async (usersnapshot) => {
      var u = usersnapshot.val();
      returnArr = [];
      if (
        u === null ||
        u["bookmarks"] === null ||
        u["bookmarks"] === undefined
      ) {
        setPosts(returnArr);
        setLoaded(true);
        return;
      }
      var bm = u["bookmarks"];
      var l = bm.length;
      bm.forEach(function (item) {
        const breference = ref(getDatabase(), "posts/" + item);
        onValue(breference, async (postsnapshot) => {
          var p = postsnapshot.val();
          p.key = postsnapshot.key;
          const breference = ref(getDatabase(), "books/" + p["bookId"]);
          onValue(breference, async (booksnapshot) => {
            returnArr.push({ ...p, ...booksnapshot.val() });
            l--;
            if (l <= 0) {
              setPosts(returnArr);
              setLoaded(true);
            }
          });
        });
      });
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  React.useEffect(() => {
    fetchData();
    const willFocusSubscription = navigation.addListener("focus", () => {
      fetchData();
    });

    return willFocusSubscription;
  }, [refreshing]);

  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: colors.background,
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
      }}
    >
      <SearchBar inpColor={"white"} />

      <ScrollView
        style={{}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoaded === true ? (
          posts.map((element, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Bookmarked Posts", element)}
            >
              <PostComp key={index} postInfo={element} />
            </TouchableOpacity>
          ))
        ) : (
          <CircularProgressTracker />
        )}
      </ScrollView>
    </View>
  );
}
