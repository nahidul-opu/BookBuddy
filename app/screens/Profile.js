import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

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
  return (
    // <View style={styles.container}>
    //   <StatusBar style="dark-content" />
    //   <View style={styles.row}>
    //     <Text style={styles.title}>Welcome {user.email}!</Text>
    //     <IconButton
    //       name="logout"
    //       size={24}
    //       color="black"
    //       onPress={handleSignOut}
    //     />
    //   </View>
    //   <Text style={styles.text}>Your UID is: {user.uid} </Text>
    // </View>
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#e6fffd",
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
          A S M Mofakkharul Islam Mohammud Esaque Ali Rukon
        </Text>

        {/* <ImageBackground
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        // resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
      ></ImageBackground> */}
      </View>

      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={styles.twoButton}></View>
        <View style={styles.twoButton}></View>
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
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
});
