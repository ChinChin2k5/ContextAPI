import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Explorer" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({color}) => <Ionicons name="compass" size={24} color={color} /> }}
      />
      <Tab.Screen 
        name="Account" 
        component={ProfileScreen} 
        options={{ tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color} /> }}
      />
    </Tab.Navigator>
  );
}

