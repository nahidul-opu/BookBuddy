import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BrowsePost from './app/screens/BrowsePost'
import SearchBar from './app/components/SearchBar';


export default function App() {
  console.log('run successfully');
  return (
    <View style={styles.container}>
      <BrowsePost/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,

  },
});
