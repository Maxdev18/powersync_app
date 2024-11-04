// AppNavigator.js
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../app/index';
import RegistrationScreen from '../app/register';
import MainTabs from '../app/MainTabs';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <>
          <Stack.Screen 
            name="index" 
            component={(props: any) => <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />} 
          />
          <Stack.Screen name="register" component={RegistrationScreen} />
        </>
      ) : (
        <Stack.Screen name="MainTabs" component={MainTabs} />
      )}
    </Stack.Navigator>
  );
}
