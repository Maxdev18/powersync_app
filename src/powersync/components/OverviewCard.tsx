import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OverviewCard = ({ name, num, kwh }: any) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>
        <Text style={styles.unique}>{num} </Text> {kwh}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  unique: {
    fontSize: 24, // Matches 1.5rem (roughly 24px) in React Native
  },
  item: {
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 2,
    width: '47%', // Use percentage as in CSS
    padding: 10,  // Adds some padding inside the card
  },
  title: {
    fontSize: 14, // Adjust as needed
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
});

export default OverviewCard;
