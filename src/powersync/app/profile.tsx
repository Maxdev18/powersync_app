import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/profilePage'


const Profile: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
         <View style={[styles.container, darkMode && styles.darkBackground]}>
      <View style={styles.profileIconBackground}>
        <Text>Replace this with profile icon</Text>
        
      </View>

      <Text style={styles.header}>Your profile</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text>First name</Text>
          <TextInput style={styles.input} value="Mike" editable={false} />
        </View>
        <View style={styles.inputBox}>
          <Text>Last name</Text>
          <TextInput style={styles.input} value="Smith" editable={false} />
        </View>
        <View style={[styles.inputBox, styles.fullWidth]}>
          <Text>Email</Text>
          <TextInput style={styles.input} value="realsexyman.original@com" editable={false} />
        </View>
        <View style={[styles.inputBox, styles.fullWidth]}>
          <Text>Password</Text>
          <TextInput style={styles.input} value="Smithybaby" secureTextEntry editable={false} />
        </View>
      </View>

      <Text style={styles.para}>Change your password</Text>

      <View style={styles.darkModeToggle}>
        <View style={styles.darkModeTextContainer}>
          <Text style={styles.darkModeText}>Dark mode</Text>
          <Text>Change your light setting between light and dark mode</Text>
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