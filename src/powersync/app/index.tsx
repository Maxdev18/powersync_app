import { UserService } from '@/Services/UserService';
import { User } from '@/Types/User';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Response } from '@/Types/Reponse';

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

    const response: void | Response = await UserService.loginUser(user)
    if(!response) {
      onLoginSuccess()
    } else {
      setErrorMessage(response)
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('register'); // Navigates to the Register screen
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 48,
    backgroundColor: '#EDFAFF',
    padding: 16,
    justifyContent: 'space-between', // Spaces elements from top to bottom
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'flex-start', // Aligns "Login" to the left
    marginBottom: 32,
  },
  centeredContent: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  forgotText: {
    color: '#0077FF',
    textAlign: 'right',
    width: '100%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#0077FF',
    alignSelf: 'flex-start', // Aligns "Don't have an account?" to the left
    marginTop: 16,
  },
  errorMessage: {
    color: '#FF6464',
    width: '100%',
    textAlign: 'right',
    marginBottom: 16
  }
});