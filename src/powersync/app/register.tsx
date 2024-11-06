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
    navigation.navigate('index' as never);
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



