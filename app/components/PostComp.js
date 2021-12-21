import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View,TouchableOpacity, Image } from 'react-native';
import { Entypo,FontAwesome  } from '@expo/vector-icons';
import React from "react";

import colors from '../config/colors';

var postInfo = {
    pos1: {imageSrc: '../assets/gitanjali.png',
            bookName: 'Gitanjali',
            writer: 'Rabindra Nath Tagore',
            description: 'Gitanjali is a collection of poems by the Bengali poet Rabindranath Tagore. Tagore received the Nobel Prize for Literature, largely for the English translation, Song Offerings. It is part of the UNESCO Collection of Representative Works.'}
}

// console.log(postInfo.pos1.imageSrc)
const PostComp = () => {
    console.log(postInfo.pos1.imageSrc)
    console.log(typeof('../assets/gitanjali.png'))
    console.log(typeof(postInfo.pos1.imageSrc))
    return (
        <TouchableOpacity style={styles.postContainer}>
            <Image 
            style={styles.bookImage}
            source={require('../assets/gitanjali.png')}/>
            <View
                style={styles.bookDetail}>
                <Text
                    style={{
                        fontSize: 40,
                    }}>
                    {postInfo.pos1.bookName}
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: 'blue'
                    }}>
                    {postInfo.pos1.writer}
                </Text>
                <Text
                    style={{
                        fontSize: 10,
                        color: 'gray'
                    }}>
                    {postInfo.pos1.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.primary,
      width: '95%',
      height: 300,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
  },

  
  bookImage: {
      height: 280,
      width:'50%',
      margin: 10
  },
  bookDetail: {
    backgroundColor: colors.secondary,
    height: '100%',
    width: '50%',
    borderRadius: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 10,
   
  }


});

export default PostComp;