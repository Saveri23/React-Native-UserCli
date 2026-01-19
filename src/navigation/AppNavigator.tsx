import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

export type RootStackParamList = {
  Users: undefined;
  UserDetail: { userId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Users">
        <Stack.Screen
          name="Users"
          // Pass darkMode toggle to HomeScreen
          children={(props) => <HomeScreen {...props} darkMode={darkMode} setDarkMode={setDarkMode} />}
          options={{
            title: 'User Directory',
            headerStyle: {
              backgroundColor: darkMode ? '#1E1E1E' : '#FFFFFF',
            },
            headerTintColor: darkMode ? '#F5F5F5' : '#1f2937',
          }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{
            title: 'User Details',
            headerStyle: {
              backgroundColor: darkMode ? '#1E1E1E' : '#FFFFFF',
            },
            headerTintColor: darkMode ? '#F5F5F5' : '#1f2937',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
