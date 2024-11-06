import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/overviewPage'
const PowerUsage: React.FC = () => {
  // Placeholder for actual chart implementation
  return (
    <View>
      <Text style={styles.subTitle}>Power Usage</Text>
      <View style={styles.powerChart}>
        {/* <Text style={styles.chartText}>The chart goes here!</Text> */}
      </View>
    </View>
  );
};



export default PowerUsage;
