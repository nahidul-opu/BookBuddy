// import * as React from 'react';
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  Image,
  TouchableHighlight,
  Pressable,
  ScrollView,
} from "react-native";
import imagePicker from "react-native-image-picker";
import { Picker } from "@react-native-picker/picker";
import { Entypo } from "@expo/vector-icons";
import {
  ref as storageRef,
  getStorage,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import { Avatar, Button as BtnP } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getDatabase, ref, set } from "@firebase/database";
import Firebase from "../config/firebase";

const auth = Firebase.auth();

async function uploadImageAsync(filepath, uri) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const fileRef = storageRef(getStorage(), filepath);
  uploadBytes(fileRef, blob).then(async (snapshot) => {
    getDownloadURL(fileRef).then(async (url) => {
      blob.close();
      console.log(url);
      return url;
    });
  });
  // We're done with the blob, close and release it
}

async function addPostToDB(
  title,
  author,
  description,
  genre,
  location,
  image_File
) {
  var postId = auth.currentUser.uid + Date.now();
  var filepathX = postId + title;
  var uri = image_File;
  var filepath = filepathX;
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const fileRef = storageRef(getStorage(), filepath);
  uploadBytes(fileRef, blob).then(async (snapshot) => {
    getDownloadURL(fileRef).then(async (url) => {
      blob.close();
      console.log(url);
      const db = getDatabase(Firebase);
      const postRef = ref(db, "posts/" + postId);
      set(postRef, {
        userId: auth.currentUser.uid,
        bookId: filepathX,
        date: Date.now(),
      });
      const bookRef = ref(db, "books/" + filepathX);
      set(bookRef, {
        title: title,
        author: author,
        description: description,
        genre: genre,
        bookCover: url,
        location: location,
      });
    });
  });
}

const AddPost = () => {
  const [imageFile, setFile] = React.useState(null);
  const [title, tileChangeText] = React.useState(null);
  const [author, authorChangeText] = React.useState(null);
  const [description, descriptionChangeText] = React.useState(null);
  const [location, locationChangeText] = React.useState(null);

  const [pickValue, setPickValue] = React.useState("Action");
  const [image, setImage] = React.useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
    setFile(result.file);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <ScrollView>
      <View style={styles.postContainer}>
        <View
          style={{
            backgroundColor: "#00D6D8",
            alignItems: "center",
            justifyContent: "center",
            width: "85%",
            height: 50,
            borderRadius: 0,
          }}
        >
          <Text
            style={{
              alignItems: "center",
              fontSize: 20,
            }}
          >
            Add New Post
          </Text>
        </View>

        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View> */}
        <TouchableOpacity
          onPress={pickImage}
          style={{
            height: 150,
            width: 150,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EDEFF3",
            margin: 20,
            borderRadius: 10,
          }}
        >
          {image === null ? (
            <Entypo name="camera" size={24} color="black" />
          ) : (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </TouchableOpacity>

        <TextInput
          onChangeText={tileChangeText}
          placeholder="Title"
          style={styles.inputTextDesign}
          value={title}
        />
        <TextInput
          onChangeText={authorChangeText}
          placeholder="Author Name"
          style={styles.inputTextDesign}
          value={author}
        />
        <TextInput
          onChangeText={descriptionChangeText}
          placeholder="Description About Book"
          style={styles.inputTextDesign}
          value={description}
        />

        <Picker
          style={styles.inputTextDesign}
          selectedValue={pickValue}
          onValueChange={(itemValue) => setPickValue(itemValue)}
        >
          <Picker.Item label="Action" value="Action" />
          <Picker.Item label="Thriller" value="Thriller" />
          <Picker.Item label="Comedy" value="Comedy" />
          <Picker.Item label="Academic" value="Academic" />
        </Picker>

        <TextInput
          onChangeText={locationChangeText}
          placeholder="Location"
          style={styles.inputTextDesign}
          value={location}
        />

        <Pressable
          style={{
            backgroundColor: "#00D6D8",
            height: 50,
            width: 150,
            alignItems: "center",
            justifyContent: "center",
            margin: 15,
            borderRadius: 10,
          }}
          onPress={() => {
            addPostToDB(title, author, description, pickValue, location, image);
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
            }}
          >
            Add Book
          </Text>
        </Pressable>
        {/* {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )} */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.primary,
    width: "100%",
    height: "100%",
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  inputTextDesign: {
    width: "85%",
    height: 60,
    borderRadius: 5,
    backgroundColor: "#EDEFF3",
    alignItems: "center",
    paddingLeft: 15,
    margin: 10,
  },
});

export default AddPost;
