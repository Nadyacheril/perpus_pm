import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

const popularBooks = [
  {
    id: '1',
    title: 'Harry Potter.',
    author: 'JK Rowling',
    cover: 'https://m.media-amazon.com/images/I/91hZmJfd1lL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg',
  },
  {
    id: '2',
    title: 'Every Moment.',
    author: 'Ceeyra',
    cover: 'https://thumbs.dreamstime.com/z/artistic-pastel-books-glittering-stars-golden-accents-whimsical-illustration-features-stack-pastel-colored-359710251.jpg',
  },
  {
    id: '3',
    title: 'Harry Potter.',
    author: 'JK Rowling',
    cover:
      'https://m.media-amazon.com/images/I/91hZmJfd1lL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg',
  },
  {
    id: '4',
    title: 'Thank 4 Loving Me.',
    author: 'kc',
    cover:
      'https://thumbs.dreamstime.com/z/artistic-pastel-books-glittering-stars-golden-accents-whimsical-illustration-features-stack-pastel-colored-359710251.jpg',
  },
];

const ongoingBooks = [
  {
    id: '5',
    title: 'Where Your Footprints Once Lingered.',
    author: 'who',
    cover:
      'https://thumbs.dreamstime.com/b/whimsical-illustration-features-stack-pastel-colored-books-shades-pink-purple-blue-each-adorned-359710267.jpg',
  },
  {
    id: '6',
    title: 'flakes on the table.',
    author: 'eightone',
    cover:
      'https://thumbs.dreamstime.com/b/tall-stack-books-covers-gradient-colors-arranged-red-bottom-to-purple-top-neatly-aligned-table-414225630.jpg',
  },
  {
    id: '7',
    title: 'The Book is an essent.',
    author: 'cjay',
    cover:
      'https://thumbs.dreamstime.com/b/whimsical-illustration-features-stack-pastel-colored-books-shades-pink-purple-blue-each-adorned-359710267.jpg',
  },
  {
    id: '8',
    title: 'Chasing the Sun on the Hiking Trail.',
    author: 'NdyaChe',
    cover: 'https://thumbs.dreamstime.com/b/tall-stack-books-covers-gradient-colors-arranged-red-bottom-to-purple-top-neatly-aligned-table-414225630.jpg',
  },
];

const BookCard = ({ book }) => {
  return (
    <Link
      href={{
        pathname: '/book/[id]',
        params: { id: book.id, title: book.title, author: book.author, cover: book.cover },
      }}
      asChild
    >
      <TouchableOpacity style={styles.card}>
        <Image
          source={{ uri: book.cover }}
          style={styles.cover}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        >
          <Text style={styles.cardTitle} numberOfLines={2}>
            {book.title}
          </Text>
          <Text style={styles.cardAuthor}>{book.author}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
};

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeTitle}>
        ⋆˚࿔ WELCOME TO THE LIBRARY 𝜗𝜚˚⋆
      </Text>
      <Text style={styles.sectionTitle}>Popular</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalList}
      >
        {popularBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Ongoing</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalList}
      >
        {ongoingBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f0ff',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7941be',
    marginTop: 24,
    marginLeft: 16,
    marginBottom: 12,
  },
  
  welcomeTitle: {
     fontSize: 22,
    fontWeight: 'bold',
    color: '#4a148c',
    marginTop: 24,
    textAlign: 'center',
    marginLeft: 16,
    marginBottom: 12,
  },

  horizontalList: {
    paddingHorizontal: 12,
  },
  card: {
    width: width * 0.30,
    height: 260,
    marginHorizontal: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  cover: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    justifyContent: 'flex-end',
    padding: 12,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardAuthor: {
    color: '#ddd',
    fontSize: 13,
  },
});