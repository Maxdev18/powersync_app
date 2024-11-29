import React, { useEffect,useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './dashboard';
import AddDevice from './addDevice';
import GPS from './gps';
import Profile from './profile';
import Device from './device';
import UpdateDevice from './updateDevice';
import { EventRegister } from 'react-native-event-listeners'
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('changeTheme', (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeEventListener(listener as string);
    };
  }, [darkMode]);


  return (
    <themeContext.Provider value = {darkMode ? theme.dark : theme.light}>
      {/* <NavigationContainer theme = {darkMode ? DarkTheme : DefaultTheme}> */}
    <Tab.Navigator theme = {darkMode ? DarkTheme : DefaultTheme}
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
      >
        
      </Tab.Screen>
         <Tab.Screen 
        name="Devices" 
        component={Device} 
        options={{ 
          tabBarLabel: 'Devices',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tablet-portrait-outline" color={color} size={size} />
          ),
        }} 
        />
      <Tab.Screen 
        name="+Device" 
        component={AddDevice} 
        options={{ 
          tabBarLabel: '+Device',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tablet-portrait-outline" color={color} size={size} />
          ),
        }} 
        />
        <Tab.Screen 
          name="Edit Device" 
          component={UpdateDevice} 
          options={{ 
            tabBarLabel: 'EditDevice',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="tablet-portrait-outline" color={color} size={size} />
            ),
          }} 
      />
      <Tab.Screen 
        name="GPS" 
        component={GPS} 
        options={{ 
          tabBarLabel: 'GPS',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-outline" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ 
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }} 
      />
      {/* Add more screens with icons as needed */}
    </Tab.Navigator>
    {/* </NavigationContainer> */}
    </themeContext.Provider>
  );
}

export default AppNavigator;
