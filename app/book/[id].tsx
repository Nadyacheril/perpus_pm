import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function BookDetail() {
  const params = useLocalSearchParams();
  const { title, author, cover } = params;

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#6a1b9a', '#ab47bc', '#f3e5f5']}
        style={styles.headerGradient}
      >
      
        <Image
          source={{ uri: cover as string || 'https://m.media-amazon.com/images/I/91hZmJfd1lL.jpg' }}
          style={styles.bookCover}
          resizeMode="contain"
        />

        <Text style={styles.bookTitle}>{title || 'Harry Potter: Half-Blood Prince'}</Text>
        <Text style={styles.bookAuthor}>by {author || 'J.K. Rowling'}</Text>

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>Start Reading</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionHeader}>Description</Text>
        <Text style={styles.description}>
          Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you. The story takes place during Harry's sixth year at Hogwarts...
        </Text>

        <Text style={styles.sectionHeader}>Editors</Text>
        <Text style={styles.info}>J.K. Rowling (author), Christopher Reath, Alena Gestabon, Steve Korg</Text>

        <Text style={styles.sectionHeader}>Language</Text>
        <Text style={styles.info}>Standard English (USA & UK)</Text>

        <Text style={styles.sectionHeader}>Format</Text>
        <Text style={styles.info}>Paperback, full colour, 345 pages</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerGradient: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  bookCover: {
    width: width * 0.6,
    height: 320,
    borderRadius: 16,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 12,
  },
  bookTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  bookAuthor: {
    fontSize: 18,
    color: '#eee',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 10,
  },
  startText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 24,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4a148c',
    marginTop: 24,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});