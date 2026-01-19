import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

export type RootStackParamList = {
  Users: undefined;
  UserDetail: { userId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Users">
        <Stack.Screen
          name="Users"
          component={HomeScreen}
          options={{ title: 'User Directory' }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{ title: 'User Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
