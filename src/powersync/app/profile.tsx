  import React, { useState,useEffect,useContext } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/profilePage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../Types/User';
import { UserService } from '@/Services/UserService';
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '@/theme/themeContext';

const Profile: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [userData, setUserData] = useState({} as User); //get user data from local storage
    const [password, setPassword] = useState('password123');
  

    const theme = useContext(themeContext); // get the theme from the context
    const getUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user'); // get the devices data from local storage
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        console.log("Retrieved user data:", data);  // Log the data 
        setUserData(data); //now devices is an array of objects
      } catch (e) {
        console.error('Error retrieving devices data from local storage', e);
      }
    };

    const handleDataChange = async (field:string, newData: string) => {
      try {
        const updatedUserData = { ...userData, [field]: newData }; //copy userData obj and updated the field
        setUserData(updatedUserData);  
        // Save the updated userData back to local Storage
        const jsonValue = JSON.stringify(updatedUserData);
        await AsyncStorage.setItem('user', jsonValue); 
        console.log('User data updated successfully!');
      } catch (e) {
        console.error('Error updating user data:', e);
      }
    }

    const onDataChange = (field:string,event:any) => {
      const newData = event.target.value;
      handleDataChange(field,newData); //this function will change the data in local storage
    };

    useEffect(() => {//retrieves user data from local storage when the component mounts
      getUserData();
    }, []);

    const updateUser = async () => {
      try{
        if (!userData || !userData.id) return; // if userData or userData.id is null, return
        console.log(userData);
        const response = await UserService.updateUser(userData);
        console.log(response);
      }catch(e){
        console.error('Error updating user:', e);
      }
    }
    
    return (
         <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.profileIconBackground}>
        <Icon name="user-circle" size={60} color="#000000" />   
      </View>

      <Text style={[styles.header,{color: theme.color}]}>Your profile</Text>

      <View style={styles.inputContainer}> {/* This is the container for the input boxes */}
        <View style={[styles.inputBox,{backgroundColor:theme.theme === 'light' ? '#ffffff' : '#333333'}, {borderColor: theme.theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : '#ffffff'}]}> 
          <Text style={[{color: theme.color}]}>First name</Text> 
          <TextInput style={[styles.input, {color: theme.color}]} value={userData.firstName} onChange={() => onDataChange('firstName',event)} />
        </View>

        <View style={[styles.inputBox,{backgroundColor:theme.theme === 'light' ? '#ffffff' : '#333333'}, {borderColor: theme.theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : '#ffffff'}]}> 
        <Text style={[{color: theme.color}]}>Last name</Text>
          <TextInput style={[styles.input, {color: theme.color}]} value= {userData.lastName} onChange={() => onDataChange('lastName',event)} />
        </View>

        <View style={[styles.inputBox, styles.fullWidth,{backgroundColor:theme.theme === 'light' ? '#ffffff' : '#333333'}, {borderColor: theme.theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : '#ffffff'}]}>
        <Text style={[{color: theme.color}]}>Email</Text>
          <TextInput style={[styles.input, {color: theme.color}]} value= {userData.email} onChange={() => onDataChange('email',event)} />
        </View>

        <View style={[styles.inputBox, styles.fullWidth,{backgroundColor:theme.theme === 'light' ? '#ffffff' : '#333333'}, {borderColor: theme.theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : '#ffffff'}]}>
        <Text style={[{color: theme.color}]}>Password</Text>
          <TextInput style={[styles.input, {color: theme.color}]} value= {password} onChangeText={setPassword} secureTextEntry editable={false} /> {/* wont let user change unless they click change password */}
        </View>

      </View>

      <TouchableOpacity> 
      <Text style={[styles.para, {color: theme.color}]}>Change your password</Text> 
      </TouchableOpacity>

      <View style={styles.darkModeToggle}>
        <View style={styles.darkModeTextContainer}>
          <Text style={styles.darkModeText}>Dark mode</Text>
          <Text>Change your light setting between <br/> light and dark mode</Text>
        </View>
        <Switch value={darkMode} onValueChange={(value) => {
          setDarkMode(value); 
          EventRegister.emit('changeTheme', value);
          }}/>
      </View>

      
      <TouchableOpacity onPress={updateUser} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
    )
}

export default Profile;