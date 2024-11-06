import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserService } from '@/Services/UserService';
import { User } from '@/Types/User';
import { Response } from '@/Types/Reponse';
import styles from '../styles/loginPage'

export default function RegistrationScreen({ onRegistrationSuccess }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState<Response | void>()
  const navigation = useNavigation();
  
  const handleRegister = async () =>{
      Alert.alert('You have been registered smartass.');
      if(email === '' || password === '' || firstName === '' || lastName === '') {
        Alert.alert('Error', 'Please enter your email and password.');
        return;
      }

      const user: User = {
        firstName,
        lastName,
        email,
        password
      }

      const response: void | Response = await UserService.createUser(user)
      if(!response) {
        onRegistrationSuccess()
      } else {
        setErrorMessage(response)
      }
  }

  const navigateLogin = () => {
    navigation.navigate('index');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      <View style={styles.centeredContent}>
      <TextInput
          style={styles.input}
          placeholder="First name..."
          placeholderTextColor="#888"
          autoCapitalize="none"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.input}
          placeholder="Last name..."
          placeholderTextColor="#888"
          autoCapitalize="none"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email..."
          placeholderTextColor="#888"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password..."
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

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={navigateLogin}>
        <Text style={styles.signupText}>Already have an account?</Text>
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
});

