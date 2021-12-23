import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "./AuthenticatedUserProvider";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const auth = Firebase.auth();
export default function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  function checkUser(authenticatedUser) {
    if (authenticatedUser && authenticatedUser.emailVerified) {
      setUser(authenticatedUser);
    } else {
      setUser(null);
    }
  }
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await checkUser(authenticatedUser);
        } catch (error) {
          console.log(error);
        }
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  });

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
