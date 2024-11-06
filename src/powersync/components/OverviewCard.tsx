import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/overviewPage'
const OverviewCard = ({ name, num, kwh }: any) => {
  return (
    <View style={styles.item}>
      <Text style={styles.normalFont}>{name}</Text>
      <Text style={styles.normalFont}>
        <Text style={styles.unique}>{num} </Text> {kwh}
      </Text>
    </View>
  );
};


export default OverviewCard;
