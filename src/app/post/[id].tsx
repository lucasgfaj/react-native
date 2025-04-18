import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const posts = [
  { id: '1', user: 'Lucas', content: 'O Andre é brabo!', time: '2h atrás' },
  { id: '2', user: 'Tonhão', content: 'Resolução de Problemas é a matéria que eu não resolvo o problema!', time: '4h atrás' },
  { id: '3', user: 'Carlos', content: 'Alguém recomenda uma boa API pública?', time: '5h atrás' },
];

export default function PostDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = posts.find((p) => p.id === id)!; // Usa "!" para afirmar que sempre existe

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          presentation: 'modal',
          title: 'Detalhes do Post',
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{post.user}</Text>
        <Text style={styles.content}>{post.content}</Text>
        <Text style={styles.time}>{post.time}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  content: {
    fontSize: 18,
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
});
