import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/overviewPage'
// import Icon from 'react-native-vector-icons/Ionicons';
const OverviewCard = ({iconName, iconColor, name, num, kwh }: any) => {
  return (
    <View style={styles.item}>
      <Text style={styles.normalFont}>{name}</Text>
      <Text >
        <Text style={styles.unique}>{num} </Text>
        <Text>{kwh}</Text>
      </Text>
      {/*   <Icon name={iconName} size={20} color={iconColor} style={styles.icon} /> */}
    </View>
  );
};


export default OverviewCard;
