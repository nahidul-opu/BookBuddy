

import * as React from 'react';
import { View, Text, Button, StyleSheet,TextInput} from 'react-native';
import imagePicker from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

import colors from '../config/colors';



// class AddPost extends React.Component {
//     handleChoosePhoto = () => {
//         const options = {
//             noData: true,
//         }
//         imagePicker.launchImageLibrary(options,response => {
//             console.log('response',response)
//         })
//     }

//     render(){
//         return (
//             <View style={styles.postContainer}>
//                 <Text style={{
//                     width: '100%',
//                     height: 30,
//                     justifyContent: 'center',
//                     backgroundColor: 'green',
//                     alignItems: 'center',
//                     fontSize: 20
//                 }}>
//                     Add New Post
//                 </Text>
//                 <Button title='Add Image' 
//                     onPress={this.handleChoosePhoto}/>
//             </View>
            
//         )

//     }
// }

const AddPost = () => {
    const [title, tileChangeText] = React.useState(null);
    const [author, authorChangeText] = React.useState(null);
    const [description, descriptionChangeText] = React.useState(null);

    const [pickValue,setPickValue] = React.useState('Action')

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
            <Button title='Add Image'/>

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

            <Button title='Add Book' onPress={()=> {console.log(pickValue)}}/>
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
    },

    inputTextDesign: {
        width: '100%',
        height: 50,
        borderRadius: 0,
        backgroundColor: colors.secondary,

    }
  
    
  
  
  });

export default AddPost;