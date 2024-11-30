import React from 'react';
import { View, Text } from 'react-native';
import createStyles from '../styles/overviewPage'
import Icon from 'react-native-vector-icons/Ionicons';
import themeContext from '@/theme/themeContext';
import { Ionicons } from '@expo/vector-icons';
import {  useContext } from 'react';

const OverviewCard = ({iconName, name, num, text, style, iconColor, isLeft }: any) => {
  const theme = useContext(themeContext); // get the theme from the context
  const styles = createStyles(theme);
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

// export default OverviewCard;
// };

export default OverviewCard;