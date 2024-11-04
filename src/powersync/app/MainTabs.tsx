import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home'; // Your Home screen component
import AddDevice from './addDevice'; // Another screen component

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Devices" component={AddDevice} options={{ tabBarLabel: 'Devices' }} />
      {/* Add more screens here */}
    </Tab.Navigator>
  );
}

export default AppNavigator;
