import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../components/Home';
import AppStateLoad from '../components/AppState';

 

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <AppStateLoad/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
