import { useGlobalSearchParams } from 'expo-router';
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

type Post = {
  id: string
  user: string
  content: string
  time: string
}

const posts: Post[] = [
  { id: '1', user: 'Lucas', content: 'O Andre é brabo!', time: '2h atrás' },
  { id: '2', user: 'Tonhão', content: 'Resolução de Problemas é a matéria que eu não resolvo o problema!', time: '4h atrás' },
  { id: '3', user: 'Carlos', content: 'Alguém recomenda uma boa API pública?', time: '5h atrás' },
]

export default function Feed() {

  const params = useGlobalSearchParams<{ id: string }>();
  const { id } = params;

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.post}>
      <Text style={styles.user}>{item.user}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text>ID Season:{id}</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  post: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  user: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#777',
  },
})
