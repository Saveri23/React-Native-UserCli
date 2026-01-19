import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'CACHED_USERS';

export const saveUsersToStorage = async (users: any[]) => {
  try {
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.log('Error saving users', error);
  }
};

export const loadUsersFromStorage = async () => {
  try {
    const data = await AsyncStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log('Error loading users', error);
    return null;
  }
};
