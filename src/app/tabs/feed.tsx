import { View, StyleSheet } from 'react-native'
import React from 'react'
import Feed from '../../components/Feed'  // Importando o componente Feed

export default function feed() {
  return (
    <View style={styles.container}>
      <Feed />
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
