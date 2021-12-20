import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View,TouchableOpacity, Image } from 'react-native';
import { Entypo,FontAwesome  } from '@expo/vector-icons';
import React from "react";

import colors from '../config/colors';

const PostComp = () => {

    
    return (
        <TouchableOpacity style={styles.postContainer}>
            <Text>sdfsd</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.primary,
      width: '100%',
      height: 300,
      borderRadius: 0,
      flexDirection: 'row',
      alignItems: 'center'
    
  },

  searchPart: {
      backgroundColor: colors.secondary,
      width: '70%',
      height: '100%',
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center'

  }
});

export default PostComp;