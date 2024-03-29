import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button as RNButton,
  Alert,
} from "react-native";
import { getDatabase, ref, onValue, set } from "firebase/database";

import CircularProgressTracker from "../components/CircularProgressTracker";
import { Button, InputField, ErrorMessage } from "../components";
import Firebase from "../config/firebase";
import colors from "../config/colors";

const auth = Firebase.auth();

function createUserInDB(name, email) {
  const db = getDatabase(Firebase);
  const reference = ref(db, "users/" + auth.currentUser.uid);
  set(reference, {
    name: name,
    email: email,
    bookmarks: [],
    numPost: 0,
    numExchange: 0,
  });
}

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [signupError, setSignupError] = useState("");
  const [busy, setBusy] = useState(false);
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    setBusy(true);
    try {
      if (name !== "" && email !== "" && password !== "") {
        await auth.createUserWithEmailAndPassword(email, password);
        createUserInDB(name, email);
        await auth.currentUser.sendEmailVerification();
        Alert.alert(
          "Success",
          "Verification Mail is sent to \n" +
            email +
            "\nVerify Your Account to Continue.",
          [{ text: "OK", onPress: () => navigation.navigate("Login") }]
        );
        /*setSignupError(
          "Verification Mail is sent to " +
            email +
            ". Verify Your Account to Continue."
        );*/
      }
    } catch (error) {
      Alert.alert("Error!", error.message, [{ text: "OK" }]);
      //setSignupError(error.message);
    }
    setBusy(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark-content" />
      <Text style={styles.title}>Sign Up</Text>

      <InputField
        inputStyle={{
          fontSize: 14,
          padding: 10,
          alignItems: "center",
        }}
        containerStyle={{
          backgroundColor: "#EDEFF3",
          margin: 10,
          height: 60,
          borderRadius: 30,
        }}
        placeholderTextColor="#AFC1C4"
        placeholder="Name"
        autoFocus={true}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
          padding: 10,
          alignItems: "center",
        }}
        containerStyle={{
          backgroundColor: "#EDEFF3",
          margin: 10,
          height: 60,
          borderRadius: 30,
        }}
        placeholderTextColor="#AFC1C4"
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
          padding: 10,
          alignItems: "center",
        }}
        containerStyle={{
          backgroundColor: "#EDEFF3",
          margin: 10,
          height: 60,
          borderRadius: 30,
          alignItems: "center",
          paddingRight: 15,
        }}
        placeholderTextColor="#AFC1C4"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType="password"
        rightIcon={rightIcon}
        value={password}
        onChangeText={(text) => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      {
        //signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
      }
      <Button
        onPress={onHandleSignup}
        backgroundColor="#CEF8F8"
        title="Create Account"
        titleColor="#00D6D8"
        titleSize={16}
        containerStyle={{
          alignSelf: "center",
          width: "90%",
          margin: 90,
          borderRadius: 30,
          height: 50,
        }}
      />
      {busy ? <CircularProgressTracker /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 50,
    paddingHorizontal: 12,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontSize: 30,
    // fontWeight: "600",
    color: colors.black,
    // alignItems: "flex-start",
    // position: "relative",
    // left: 50,
    // top: 50,
    paddingBottom: 24,
    paddingLeft: 20,
    fontWeight: "bold",
    // backgroundColor: "red",
  },
});
