import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View,TouchableOpacity, Image } from 'react-native';
import { Entypo,FontAwesome  } from '@expo/vector-icons';
import React from "react";

import colors from '../config/colors';

const SearchBar = () => {

    const [text, onChangeText] = React.useState(null);
    //const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.searchBox}>
            
            <View style={styles.searchPart}>
                <FontAwesome name="search" size={20} color="black" style={
                    {
                        padding: "4%"
                    }
                }/>
                
                <TextInput
                    onChangeText={onChangeText} placeholder='Search Books' value={text}/>
            </View>

            <TouchableOpacity>
                <Entypo name="bell" size={40} color="black" />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
  searchBox: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: "row",
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

export default SearchBar;