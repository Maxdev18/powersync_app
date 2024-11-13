import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/overviewPage'

interface AddDeviceProps {
  icon: React.ReactNode;
  name: string;
  power: number;
}

const AddDevice: React.FC<AddDeviceProps> = ({ icon, name, power }) => {
  return (
    <View style={styles.biggestEaterContainer}>
      <View style={styles.groupItem1}>{icon}</View>
      <View style={styles.groupItem2}>
        <Text style={styles.usedMostName}>{name}</Text>
        <Text style={styles.logo}>logo</Text>
      </View>
      <Text style={styles.power}>{power} kWh</Text>
    </View>
  );
};


export default AddDevice;
