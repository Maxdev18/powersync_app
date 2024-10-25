import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import GoogleSignIn from '@/components/GoogleSignIn';

const LoginScreen = ({ }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter your email and password.');
      return;
    }
    // Perform login logic here (e.g., API call)
    Alert.alert('Success', 'Logged in successfully');
    // navigation.navigate('HomeScreen'); // Replace with your navigation logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
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
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />

      <Text style={{
        color: '#0077FF',
        textAlign: 'right',
        marginBottom: 16,
      }}>Forgot password?</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={{
        textAlign: 'center',
        marginVertical: 16,
        fontWeight: 'bold',
      }}>OR</Text>

      <GoogleSignIn />

      <Text style={{
        color: '#0077FF',
        marginTop: 176,
      }}>Don't have an account?</Text>
      
      {/* <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDFAFF',
    padding: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 200,
    marginTop: 64,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#007bff',
    fontSize: 16,
  },
});

export default LoginScreen;