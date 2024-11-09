import React from 'react';
import { View, Text } from 'react-native';
import OverviewCard from '../components/OverviewCard';
import PowerUsage from '../components/PowerUsage';
import TotalConsumption from '../components/TotalConsumption';
import AddDevice from "../components/AddDevice";
import styles from '../styles/overviewPage'

const Dashboard: React.FC = () => { 
  return (
    <View style={styles.app}>
      <Text style={styles.title}>Overview</Text>
      
      <View style={styles.overviewContainer}>
        <OverviewCard iconName="flash-outline" iconColor="blue" name="Power consumption" num={10.43} kwh="kWh" />
        <OverviewCard iconName="alert-outline" iconColor="red" name="Low devices" num={1} />
        <OverviewCard iconName="cash-outline" iconColor="green" name="Estimated cost" num="$1.89" />
      </View>
      {/* this will display the chart of the week */}
      <PowerUsage/>
      
      {/* this will show the total consumption for the week */}
      <TotalConsumption iconName="flash-outline" iconColor="blue" power={43.82}/>

      <View>
      <Text style={styles.subTitle}>Biggest eaters</Text>

      <View style={styles.usedDevices}>
        {/* Display each device with its details */}
        <AddDevice icon="📱" name="Carl's Tablet" power={12.43} />
        <AddDevice icon="🎮" name="Max's Controller" power={10.41} />
      </View>
    </View>
    
    </View>
  );
};

export default Dashboard;
