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
    fontSize: 24, 
  },
  item: {
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 2,
    width: '47%', 
    padding: 10,  
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
});

export default OverviewCard;
