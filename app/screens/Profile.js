import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { ref, getDatabase, onValue, set } from "@firebase/database";
import { IconButton } from "../components";
import colors from "../config/colors";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();

export default function Profile() {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [userData, setuserData] = useState(null);
  useEffect(() => {
    const reference = ref(
      getDatabase(Firebase),
      "users/" + auth.currentUser.uid
    );
    onValue(reference, async (snapshot) => {
      var u = await snapshot.val();
      setuserData(u);
    });
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#e6fffd",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingTop: StatusBar.currentHeight,
          backgroundColor: "#A4EBF3",
          margin: 15,
          borderRadius: 20,
          // position: "absolute",
          // top: 0,
          // borderWidth: 0.5,
          // borderColor: "blue",
        }}
      >
        <View
          style={{
            height: 150,
            width: 150,
            backgroundColor: "#CCF2F4",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 200,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              height: 130,
              width: 130,
              backgroundColor: "#F4F9F9",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 200,
            }}
          >
            <EvilIcons name="user" size={130} color="black" />
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            width: "80%",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          {userData ? userData.name : null}
        </Text>
      </View>

      {/* total post and total exhange */}
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={styles.twoButton}>
          <Text
            style={{
              fontSize: 40,
            }}
          >
            {userData && userData.numPost ? userData.numPost : "0"}
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}
          >
            Total Post
          </Text>
        </View>

        <View style={styles.twoButton}>
          <Text
            style={{
              fontSize: 40,
            }}
          >
            {userData && userData.numExchange ? userData.numExchange : "0"}
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}
          >
            Total Exchange
          </Text>
        </View>
      </View>

      {/* options container */}
      <View
        style={{
          // height: 60,
          // backgroundColor: "green",
          // flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 10,
        }}
      >
        {/* for each optons */}
        {/* history */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.options,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 15,
            height: 50,
            marginTop: 20,
            // position: "relative",
            // top: 30,
          }}
        >
          {/* for icon */}
          <View style={styles.forIcon}>
            <FontAwesome name="history" size={30} color="black" />
          </View>
          <View style={styles.forText}>
            <Text style={{ fontSize: 22 }}>History</Text>
          </View>
        </TouchableOpacity>
        {/* settings */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.options,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 15,
            height: 50,
            marginTop: 10,
            // position: "relative",
            // top: 30,
          }}
        >
          {/* for icon */}
          <View style={styles.forIcon}>
            <Ionicons name="settings-sharp" size={30} color="black" />
          </View>
          <View style={styles.forText}>
            <Text style={{ fontSize: 22 }}>Settings</Text>
          </View>
        </TouchableOpacity>

        {/* Edit Profile */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.options,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 15,
            height: 50,
            marginTop: 10,
            // position: "relative",
            // top: 30,
          }}
        >
          {/* for icon */}
          <View style={styles.forIcon}>
            {/* <FontAwesome name="history" size={40} color="black" /> */}
            <FontAwesome5 name="user-edit" size={25} color="black" />
          </View>
          <View style={styles.forText}>
            <Text style={{ fontSize: 22 }}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        {/* Log Out */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.options,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 15,
            height: 50,
            marginTop: 10,
            marginBottom: 20,
            // position: "relative",
            // top: 30,
          }}
          onPress={() => handleSignOut()}
        >
          {/* for icon */}
          <View style={styles.forIcon}>
            {/* <FontAwesome name="history" size={40} color="black" /> */}
            <Entypo name="log-out" size={30} color="black" />
          </View>
          <View style={styles.forText}>
            <Text style={{ fontSize: 22 }}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  twoButton: {
    height: 80,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.options,
    borderRadius: 20,
    flexDirection: "column",
    padding: 15,
  },
  forIcon: {
    height: 50,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
    // flex: 1,
  },

  forText: {
    height: 50,
    width: "75%",
    justifyContent: "center",
    alignItems: "flex-start",
    left: 8,
    borderRadius: 20,
    // flexGrow: 1,
  },
});
