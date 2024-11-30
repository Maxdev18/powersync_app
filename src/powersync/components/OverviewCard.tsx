import React from 'react';
import { View, Text } from 'react-native';
import createStyles from '../styles/overviewPage'
import Icon from 'react-native-vector-icons/Ionicons';
import themeContext from '@/theme/themeContext';
import {  useContext } from 'react';

const OverviewCard = ({iconName, iconColor, name, num, kwh }: any) => {
  const theme = useContext(themeContext); // get the theme from the context
  const styles = createStyles(theme);
  return (
    <View style={styles.item}>
      <Text style={styles.normalFont}>{name}</Text>
      <Text >
        <Text style={styles.unique}>{num} </Text>
        <Text  style={styles.normalFont}>{kwh}</Text>
      </Text>
        <Icon name={iconName} size={20} color={iconColor} style={styles.icon} />
    </View>
  );
};


export default OverviewCard;
