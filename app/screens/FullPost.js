import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import React from "react";
import colors from "../config/colors";


const postDetails= ({ postInfo }) =>{
    console.log(postInfo);
    return (
      <TouchableOpacity style={styles.postContainer}
        onPress={
          // navigation.navigate(FullPost)
          console.log('pressed')
        }>
        <Image source={{ uri: postInfo.bookCover }} style={styles.bookImage} />
        <View style={styles.bookDetail}>
          <Text
            style={{
              fontSize: 30,
              marginBottom:5,
              
            }}
          >
            {postInfo.title}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "blue",
              marginBottom:5,
            }}
          >
            {postInfo.author}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "gray",
              marginBottom:5,
              // marginRight: 3,
              width: '100%',
              // backgroundColor: 'blue',
              textAlign: 'justify'
            }}
          >
            {postInfo.description.length >=350? postInfo.description.slice(0,350)+'...':postInfo.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

const FullPost = ({route,navigation}) => {
    const postInfo = route.params
    console.log('full post %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n',postInfo)
    return(

        <View style={styles.postContainer}>

            <View style={{
                flexDirection: 'row',
                // alignItems: 'center'
                top: 30,
                alignItems: 'center',
                justifyContent: 'space-between',
                // margin: 10,
                left: 10,
                // width: "80%",
                // backgroundColor: 'green'
            }}>
                {/* <View style={{
                    height: 80,
                    width: 80,
                    backgroundColor: 'gray',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50
                }}>
                    <FontAwesome5 name="user" size={50} color="black" />
                </View> */}
                <FontAwesome name="user-circle-o" size={70} color="black" />
                
                <Text style={{fontSize:20,color:'blue',width:200,marginLeft: 20}}>{'A S M Mofakkharul Islam'}</Text>
                {/* <postDetails postInfo={}/> */}
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    postContainer: {
        // backgroundColor: '#f2f2f2',//'#ebebeb',
        flex: 1,
        // height: '100%',
        // borderRadius: 10,
        flexDirection: "column",
        alignItems: "center",
        // borderWidth: 0.5,        
        // justifyContent: 'center'
        
      },
  
    
  });

export default FullPost;