import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './dashboard';
import AddDevice from './addDevice';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#313131' }, // Change background color here
        tabBarActiveTintColor: '#ffffff', // Active icon color
        tabBarInactiveTintColor: '#a9a9a9', // Inactive icon color
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Dashboard} 
        options={{ 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Devices" 
        component={AddDevice} 
        options={{ 
          tabBarLabel: 'Devices',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tablet-portrait-outline" color={color} size={size} />
          ),
        }} 
      />
      {/* Add more screens with icons as needed */}
    </Tab.Navigator>
  );
}

export default AppNavigator;
