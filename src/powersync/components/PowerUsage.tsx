import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PowerUsage: React.FC = () => {
  // Placeholder for actual chart implementation
  return (
    <View style={styles.powerUsageSection}>
      <Text style={styles.title}>Power Usage</Text>
      <View style={styles.powerChart}>
        <Text style={styles.chartText}>The chart goes here!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  powerUsageSection: {
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  powerChart: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    height: 120,
    backgroundColor: 'white',
  },
  chartText: {
    fontSize: 16,
  },
});

export default PowerUsage;
