import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/overviewPage'
import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/Ionicons';
const OverviewCard = ({iconName, name, num, text, style, iconColor, isLeft }: any) => {
  return (
    <View style={{...styles.item, ...style}}>
      <Text style={styles.normalFont}>{name}</Text>
      <Text style={isLeft ? {...styles.overviewCardTextContainer, justifyContent: "flex-start"} : {...styles.overviewCardTextContainer}}>
        {isLeft && <Text style={styles.overviewUnitTextDollar}>{text}</Text>}
        <Text style={styles.unique}>{num} </Text>
        {!isLeft && <Text style={styles.overviewUnitText}>{text}</Text>}
      </Text>
      <Ionicons name={iconName} size={20} color={iconColor} style={styles.icon} />
    </View>
  );
};

export default OverviewCard;