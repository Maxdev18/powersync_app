import { UserService } from '@/Services/UserService';
import { User } from '@/Types/User';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Response } from '@/Types/Reponse';
import styles from '../styles/loginPage'

export default function LoginScreen({ onLoginSuccess }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<Response | void>()
  const navigation = useNavigation();
  
  const handleLogin = async () => { // TODO: Change to use user login service
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter your email and password.');
      return;
    }

    const user: User = {
      email,
      password
    }

    const response: Response = await UserService.loginUser(user)

    if(!response.isError) {
      onLoginSuccess()
    } else {
      setErrorMessage(response)
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('register' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.centeredContent}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        {errorMessage ? 
          <Text style={styles.errorMessage}>
            {errorMessage.message}
          </Text> :
          null
        }

        <Text style={styles.forgotText}>Forgot password?</Text>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>


      </View>

      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.signupText}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}