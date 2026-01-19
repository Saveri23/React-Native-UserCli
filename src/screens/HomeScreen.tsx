import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../redux/usersSlice';
import UserCard from '../components/UserCard';
import { RootState, AppDispatch } from '../redux/store';
const HomeScreen = ({ darkMode, setDarkMode }: any) => {
  // Remove local darkMode state; use props
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(loadUsers());
    setRefreshing(false);
  };

  const theme = darkMode
    ? { background: '#1E1E1E', card: '#2E2E2E', text: '#F5F5F5', placeholder: '#888' }
    : { background: '#F1F5F9', card: '#FFFFFF', text: '#1f2937', placeholder: '#999' };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity
        style={styles.themeButton}
        onPress={() => setDarkMode(!darkMode)}
      >
        <Text style={{ fontSize: 20 }}>{darkMode ? '☀️' : '🌙'}</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Search users..."
        placeholderTextColor={theme.placeholder}
        value={search}
        onChangeText={setSearch}
        style={[styles.search, { backgroundColor: theme.card, color: theme.text }]}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={() => {}}
            theme={{ card: theme.card, text: theme.text }}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing || loading}
            onRefresh={onRefresh}
            tintColor={theme.text}
          />
        }
      />
    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  search: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  themeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 10,
  },
});
