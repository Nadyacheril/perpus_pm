import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  const [username, setUsername] = useState('nadyacheril');
  const [email, setEmail] = useState('nadyacheril@gmail.com');
  const [password, setPassword] = useState('pacarjay');
  const [repeatPass, setRepeatPass] = useState('pacarjay');
  const [about, setAbout] = useState('hai.');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>PROFILE</Text>

      <View style={styles.avatarSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: '' }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.uploadBtn}>
            <Text style={styles.uploadText}>Upload Picture</Text>
          </TouchableOpacity>
        </View>

     
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

        <Text style={styles.label}>Repeat Password:</Text>
        <TextInput style={styles.input} value={repeatPass} onChangeText={setRepeatPass} secureTextEntry />

        <Text style={styles.label}>About Me:</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          value={about}
          onChangeText={setAbout}
          multiline
          numberOfLines={5}
        />

        <TouchableOpacity style={styles.updateBtn}>
          <Text style={styles.updateText}>Update Information</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9ff', padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#333', textAlign: 'center', marginVertical: 20 },
  avatarSection: { alignItems: 'center', marginBottom: 30 },
  avatarContainer: { alignItems: 'center' },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#ab47bc' },
  uploadBtn: { marginTop: 12, backgroundColor: '#ab47bc', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20 },
  uploadText: { color: '#fff', fontWeight: '600' },
  socials: { flexDirection: 'row', marginTop: 20, gap: 20 },
  socialBtn: { backgroundColor: '#fff', padding: 12, borderRadius: 50, shadowColor: '#000', shadowOpacity: 0.1, elevation: 4 },
  form: { backgroundColor: '#fff', borderRadius: 16, padding: 20, shadowColor: '#000', shadowOpacity: 0.08, elevation: 5 },
  label: { fontSize: 16, color: '#555', marginBottom: 6, marginTop: 12 },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },
  textarea: { height: 120, textAlignVertical: 'top' },
  updateBtn: {
    backgroundColor: '#4a148c',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  updateText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});