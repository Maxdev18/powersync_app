import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TotalConsumptionProps {
  power: number;
}

const TotalConsumption: React.FC<TotalConsumptionProps> = ({ power }) => {
  return (
    <View style={styles.weeklyConsumption}>
      <Text style={styles.title}>This week's Consumption</Text>
      <Text style={styles.powerText}>
        <Text style={styles.unique}>{power}</Text> kWh
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weeklyConsumption: {
    marginVertical: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  powerText: {
    fontSize: 16,
  },
  unique: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TotalConsumption;
