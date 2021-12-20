import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BrowsePost from './app/screens/BrowsePost'

export default function App() {
  console.log('run successfully');
  return (
    <View style={styles.container}>
      <Text>This is the landing page</Text>
      <StatusBar style="auto" />
      <BrowsePost />
      <BrowsePost/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
