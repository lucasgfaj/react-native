import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Profile from '../../components/Profile'

export default function profile() {
  return (
    <View style={styles.container}>
      <Profile/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
})
