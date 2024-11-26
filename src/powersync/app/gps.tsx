import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import MapView from 'react-native-maps'//was not able to add


const DeviceLocationScreen = () => {
  const theme = lightTheme;
  const styles = getStyles(theme);

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

const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#000',
  buttonColor: '#1E90FF',
  buttonText: '#fff',
};

const getStyles = (theme: any) =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
      },
      deviceInfoContainer: {
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      deviceInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.textColor,
      },
      deviceInfoText: {
        fontSize: 16,
        marginTop: 4,
        color: theme.textColor,
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
      navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: theme.backgroundColor,
      },
      navItem: {
        fontSize: 16,
        color: theme.textColor,
      },
    });

export default DeviceLocationScreen;
