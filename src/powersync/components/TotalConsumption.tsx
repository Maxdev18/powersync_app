import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/overviewPage'
interface TotalConsumptionProps {
  power: number;
}

const TotalConsumption: React.FC<TotalConsumptionProps> = ({ power }) => {
  return (
    <View style={styles.weeklyConsumption}>
      <Text style={styles.normalFont}>This week's Consumption</Text>
      <Text >
        <Text style={styles.unique}>{power}</Text> kWh
      </Text>
    </View>
  );
};

export default TotalConsumption;
