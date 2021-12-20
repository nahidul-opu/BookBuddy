// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';


import SearchBar from '../components/SearchBar';

const BrowsePost = () => {
    return (
        <View>
            <SearchBar/>
        </View>
    )
}

export default BrowsePost;