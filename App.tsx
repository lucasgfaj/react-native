import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Car from './src/components/Car';

let obj = {
  car: 'Fuscao Preto',
  brand: 'VW',
  Hp: 150
 }
 

export default function App() {
  return (
    <View style={styles.container}>
      <Car car="Fusca" brand="VW" hp={150}/>

      <StatusBar style="auto" />
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
