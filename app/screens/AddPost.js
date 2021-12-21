

// import * as React from 'react';
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet,TextInput, Platform, StatusBar, Image, TouchableHighlight} from 'react-native';
import imagePicker from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import { Entypo } from '@expo/vector-icons';

// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import { Avatar, Button as BtnP } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AddPost = () => {
    const [title, tileChangeText] = React.useState(null);
    const [author, authorChangeText] = React.useState(null);
    const [description, descriptionChangeText] = React.useState(null);

    const [pickValue,setPickValue] = React.useState('Action')
    const [image, setImage] = React.useState(null);

        useEffect(() => {
            (async () => {
              if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                  alert('Sorry, we need camera roll permissions to make this work!');
                }
              }
            })();
          }, []);
        
          const pickImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            console.log(result);
        
            if (!result.cancelled) {
              setImage(result.uri);
            }
          };

    return (
        <View style={styles.postContainer}>
            <Text style={{
                width: '100%',
                height: 30,
                justifyContent: 'center',
                backgroundColor: 'green',
                alignItems: 'center',
                fontSize: 20
            }}>
                Add New Post
            </Text>

            
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View> */}

            <TouchableOpacity onPress={pickImage}
                style={{
                    height: 150,
                    width: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#d4d99e'
                }}>
                <Entypo name="camera" size={24} color="black" />
            </TouchableOpacity>

          

            <TextInput
                onChangeText={tileChangeText} placeholder='Title' style={styles.inputTextDesign} value={title}/>
            <TextInput
                onChangeText={authorChangeText} placeholder='Author Name' style={styles.inputTextDesign} value={author}/>
            <TextInput
                onChangeText={descriptionChangeText} placeholder='Description About Book' style={styles.inputTextDesign} value={description}/>

            <Picker style={{
                height: 80,
                width: '100%',
                backgroundColor: 'yellow',
                borderWidth: 2
                }}
                selectedValue={pickValue}
                onValueChange={(itemValue)=> setPickValue(itemValue)}>
                <Picker.Item label='Action' value='Action'/>
                <Picker.Item label='Thriller' value='Thriller'/>
                <Picker.Item label='Comedy' value='Comedy'/>
            </Picker>

            <Button title='Add Book' onPress={()=> {console.log(title,author,description,pickValue,image)}}/>

            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
        
    )
}


const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: colors.primary,
        width: '100%',
        height: '100%',
        borderRadius: 0,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    inputTextDesign: {
        width: '100%',
        height: 50,
        borderRadius: 0,
        backgroundColor: colors.secondary,

    }
  
    
  
  
  });

export default AddPost;