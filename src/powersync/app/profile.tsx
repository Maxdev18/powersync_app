import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/profilePage'

const Profile: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [firstName, setFirstName] = useState('Mike');
    const [lastName, setLastName] = useState('Smith');
    const [email, setEmail] = useState('realSexyman.original@email.com');
    const [password, setPassword] = useState('realPasswordforSexyman');
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    const handleFirstNameChange = (text: string) => {
      setFirstName(text);
    };

    return (
         <View style={[styles.container, darkMode && styles.darkBackground]}>
      <View style={styles.profileIconBackground}>
        {/* <Text>Replace this with profile icon</Text> */}
        <Icon name="user-circle" size={60} color="#000000" />
        
      </View>

      <Text style={styles.header}>Your profile</Text>

      <View style={styles.inputContainer}> {/* This is the container for the input boxes */}
        <View style={styles.inputBox}> {/* I put each input in separate view (div) */}
          <Text>First name</Text>
          <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
        </View>
        <View style={styles.inputBox}>
          <Text>Last name</Text>
          <TextInput style={styles.input} value= {lastName} onChangeText={setLastName} />
        </View>
        <View style={[styles.inputBox, styles.fullWidth]}>
          <Text>Email</Text>
          <TextInput style={styles.input} value= {email} onChangeText={setEmail} />
        </View>
        <View style={[styles.inputBox, styles.fullWidth]}>
          <Text>Password</Text>
          <TextInput style={styles.input} value= {password} onChangeText={setPassword} secureTextEntry editable={false} /> {/* wont let user change unless they click change password */}
        </View>
      </View>

      <TouchableOpacity> {/* add onPress function to get to change password screen later */}
      <Text style={styles.para}>Change your password</Text> 
      </TouchableOpacity>

      <View style={styles.darkModeToggle}>
        <View style={styles.darkModeTextContainer}>
          <Text style={styles.darkModeText}>Dark mode</Text>
          <Text>Change your light setting between <br/> light and dark mode</Text>
        </View>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
    )
}

export default Profile;