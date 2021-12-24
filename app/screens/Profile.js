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
        flexDirection: "column",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#CDDEFF",
      }}
    >
      <EvilIcons name="user" size={150} color="black" />
      <Text
        style={{
          fontSize: 20,
          width: "80%",
          textAlign: "center",
        }}
      >
        A S M Mofakkharul Islam Mohammud Esaque Ali Rukon
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          width: "50%",
          margin: 10,
          // fontFamily: "Times-new-roman",
          // fontStyle: "italic",
        }}
      >
        {"Total Posts \n" + 15}
      </Text>

      <Image
        source={{ uri: "https://picsum.photos/200" }}
        // resizeMode="cover"
        // style={{ flex: 1 }}
      />
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: "black",
  },
});
