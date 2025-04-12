import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, AppState } from 'react-native'
import React from 'react'
import Login from '../components/Login';
import AppStateLoad from '../components/AppState';


export default function login() {
  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88',
    alignItems: 'center',
    justifyContent: 'center',
  },
});