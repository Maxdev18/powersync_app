import React, { useEffect,useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './dashboard';
import AddDevice from './addDevice';
import GPS from './gps';
import Profile from './profile';
import Device from './device';
import { EventRegister } from 'react-native-event-listeners'
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import { createStackNavigator } from '@react-navigation/stack';
import EditDevice from './updateDevice';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DevicesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Devices" component={Device} />
      <Stack.Screen name="updateDevice" component={EditDevice} />
      <Stack.Screen name="+Device" component={AddDevice} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
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
    <themeContext.Provider value={darkMode ? theme.dark : theme.light}>
      <Tab.Navigator
        theme={darkMode ? DarkTheme : DefaultTheme}
        screenOptions={{
          tabBarStyle: { backgroundColor: '#000000', paddingVertical: 8, height: 56 },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#a9a9a9',
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
          component={DevicesStack} // Use the Devices stack here
          options={{
            tabBarLabel: 'Devices',
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
      </Tab.Navigator>
    </themeContext.Provider>
  );
}
