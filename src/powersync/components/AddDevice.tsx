import React,{ useContext } from 'react';
import { View, Text } from 'react-native';
import createStyles from '../styles/overviewPage'
import themeContext from '../theme/themeContext';
interface AddDeviceProps {
  bgColor: string;
  name: string;
  power: number;
}

const AddDevice: React.FC<AddDeviceProps> = ({name, power, bgColor }) => {

  const theme = useContext(themeContext); // get the theme from the context
  const styles = createStyles(theme);
// const AddDevice: React.FC<AddDeviceProps> = ({ name, power, bgColor }) => {
  return (
    <View style={styles.biggestEaterContainer}>
      <View style={{...styles.groupItem1, backgroundColor: bgColor, borderRadius: 100, width: 16 }}>
      <Text style={styles.groupItem1Text}>{name[0].toUpperCase()}</Text>
      </View>
      <View style={styles.groupItem2}>
        <Text style={styles.usedMostName}>{name}</Text>
      </View>
      <Text style={styles.power}>{power} kWh</Text>
    </View>
  );
};


export default AddDevice;
