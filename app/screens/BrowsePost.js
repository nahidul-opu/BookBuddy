// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';


import SearchBar from '../components/SearchBar';
import PostComp from '../components/PostComp';

const BrowsePost = () => {
    return (
        <View style={{
            padding: 10
        }}>
            
            <PostComp/>
            <PostComp/>
        </View>
        
    )
}

export default BrowsePost;