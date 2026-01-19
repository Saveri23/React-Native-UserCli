import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { User } from '../types/User';

export default function UserCard({
  user,
  onPress,
  theme,
}: {
  user: User;
  onPress: () => void;
  theme: { card: string; text: string };
}) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={onPress}
    >
      <Text style={[styles.name, { color: theme.text }]}>{user.name}</Text>
      <Text style={[styles.email, { color: theme.text }]}>{user.email}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 14,
    boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  email: { fontSize: 14, marginTop: 4 },
});

