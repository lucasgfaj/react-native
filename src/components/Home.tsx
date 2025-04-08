import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PlaceholderImage = `https://res.cloudinary.com/duposs86e/image/upload/v1743548261/FEuIMjbX0AE8WE7_y9r2pf.jpg`

export default function Home() {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{uri: PlaceholderImage}} style={styles.image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
    },
    image: {
      top: 100,
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });