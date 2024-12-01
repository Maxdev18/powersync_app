// AppNavigator.js
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../app/index';
import RegistrationScreen from '../app/register';
import MainTabs from '../app/MainTabs';
import { startDeviceSimulation } from '@/simulation/simulation';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    startDeviceSimulation()
  }, [])

  const handleAuthenticationSuccess = () => {
    setIsLoggedIn(true);
  };

  // Wrapper components to avoid inline functions
  const LoginScreenWrapper = (props: any) => (
    <LoginScreen {...props} onLoginSuccess={handleAuthenticationSuccess} />
  );

  const RegistrationScreenWrapper = (props: any) => (
    <RegistrationScreen {...props} onRegistrationSuccess={handleAuthenticationSuccess} />
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <>
          <Stack.Screen 
            name="index" 
            component={LoginScreenWrapper} // Pass wrapper directly
          />
          <Stack.Screen 
            name="register" 
            component={RegistrationScreenWrapper} // Pass wrapper directly
          />
        </>
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </>
      )}
    </Stack.Navigator>
  );
}
