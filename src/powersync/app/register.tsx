import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/loginPage'

export default function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigation = useNavigation();
  
  const handleRegister = () =>{
      Alert.alert('You have been registered smartass.');
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
