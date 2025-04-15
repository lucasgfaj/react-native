import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PlaceholderImage = `https://res.cloudinary.com/duposs86e/image/upload/v1744754136/utfpr_jjpekv.png`

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
      top: 170,
      width: 180,
      height: 200,
      borderRadius: 18,
    },
  });