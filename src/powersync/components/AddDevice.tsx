import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import createStyles from '../styles/overviewPage'
import themeContext from '@/theme/themeContext';
import {  useContext } from 'react';

interface AddDeviceProps {
  icon: React.ReactNode;
  name: string;
  power: number;
}

const AddDevice: React.FC<AddDeviceProps> = ({ icon, name, power }) => {

  const theme = useContext(themeContext); // get the theme from the context
  const styles = createStyles(theme);
  return (
    <View style={styles.biggestEaterContainer}>
      <View style={styles.groupItem1}>
        <Text>{icon}</Text>
      </View>
      <View style={styles.groupItem2}>
        <Text style={styles.usedMostName}>{name}</Text>
        {/* <Text style={styles.logo}>logo</Text> */}
      </View>
      <Text style={styles.power}>{power} kWh</Text>
    </View>
  );
};


export default AddDevice;
