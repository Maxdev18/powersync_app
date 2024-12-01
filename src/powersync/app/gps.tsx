import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button } from 'react-native';
// import MapView from 'react-native-maps'//was not able to add
import themeContext from '@/theme/themeContext';
import { useContext } from 'react';
const DeviceLocationScreen = () => {
  // const theme = lightTheme;
  // const styles = getStyles(theme);
  const theme = useContext(themeContext); // get the theme from the context
  const styles = createStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.deviceInfoContainer}>
        <Text style={styles.deviceInfoTitle}>Find your devices</Text>
        <Text style={styles.deviceInfoText}>Name: Garage flashlight</Text>
        <Text style={styles.deviceInfoText}>Group: Carl's devices</Text>
        <Text style={styles.deviceInfoText}>Battery percentage: 35%</Text>
      </View>
      <View style={styles.placeholderBox}>
        <Text style={styles.placeholderText}>Map place holder</Text>
      </View>
    </SafeAreaView>
  );
};


const createStyles = (theme: { theme: any }) =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:theme.theme === 'light' ? '#FFFFFF' : '#151414',
      },
      deviceInfoContainer: {
        padding: 16,
        backgroundColor:theme.theme === 'light' ? '#FFF5E9' : '#151414',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      deviceInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      deviceInfoText: {
        fontSize: 16,
        marginTop: 4,
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      placeholderBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 16,
      },
      placeholderText: {
        fontSize: 18,
        color: '#888',
      },
    });

export default DeviceLocationScreen;
