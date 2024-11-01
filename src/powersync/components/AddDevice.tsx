import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AddDeviceProps {
  icon: React.ReactNode;
  name: string;
  power: number;
}

const AddDevice: React.FC<AddDeviceProps> = ({ icon, name, power }) => {
  return (
    <View style={styles.group}>
      <View style={styles.groupItem1}>{icon}</View>
      <View style={styles.groupItem2}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.logo}>logo</Text>
      </View>
      <Text style={styles.power}>{power} kWh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    borderRadius: 5,
    backgroundColor: 'white',

  },
  groupItem1: {
    flexGrow: 1,
    alignItems: 'center',
  },
  groupItem2: {
    flexGrow: 4,
    paddingLeft: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    fontSize: 14,
    color: 'gray',
  },
  power: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddDevice;
