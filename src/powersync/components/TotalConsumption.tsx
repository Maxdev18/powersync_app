import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/overviewPage'
import Icon from 'react-native-vector-icons/Ionicons';


const TotalConsumption = ({ iconName, iconColor,power }:any) => {
  return (
    <View style={styles.weeklyConsumption}>
      <Text style={styles.normalFont}>This week's Consumption</Text>
      <Text >
        <Text style={styles.unique}>{power}</Text> kWh
      </Text>
      <Icon name={iconName} size={20} color={iconColor} style={styles.icon} />
    </View>
  );
};

export default TotalConsumption;
