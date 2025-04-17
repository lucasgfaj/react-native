import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://res.cloudinary.com/duposs86e/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1743552812/lucasgfaj_stxklu.jpg' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Lucas Fajardo</Text>
      <Text style={styles.bio}>Desenvolvedor mobile | React Native | Amante de café ☕</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Seguidores</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>180</Text>
          <Text style={styles.statLabel}>Seguindo</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  statBox: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
  },
})
