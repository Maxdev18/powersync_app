import React from 'react';
import { View, Text} from 'react-native';
import OverviewCard from '../components/OverviewCard';
import PowerUsage from '../components/PowerUsage';
import TotalConsumption from '../components/TotalConsumption';
import AddDevice from "../components/AddDevice";
import styles from '../styles/overviewPage'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';


interface Device {
  name: string;
  wattage: number;
  batteryPercentage: number;
  estimatedCost: number;
}
//TODO: modify the countTotalConsumption to be the total consumption for the week
//TODO: modify the countTotalCost to be the total cost for the week
//TODO: find a way to get the data and add the chart

const Dashboard: React.FC = () => { 
  const [devices, setDevices] = useState<Device[]>([]);
  const [lowDevices, setLowDevices] = useState(0);
  const [totalConsumption, setTotalConsumption] = useState(0);
  const [estimatedCost, setEstimatedCost] = useState(0); 
  const getDevicesData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('devices'); // get the devices data from local storage
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log("Retrieved devices:", data);  // Log the data 
      setDevices(data); //now devices is an array of objects
    } catch (e) {
      console.error('Error retrieving devices data from local storage', e);
    }
  };

    const sortedDevices = [...devices].sort((a, b) => b.wattage - a.wattage); //might not work

    const countLowBatteryDevices = () => { //simply filter out devices 
      const count = devices.filter(device => device.batteryPercentage < 25).length;
      setLowDevices(count);
    };

    const countTotalConsumption = () => { //*currently only counts the total consumption not weekly
      const total = devices.reduce((sum, device) => sum + device.wattage, 0);
      setTotalConsumption(total);
    }

    const countTotalCost = () => { //*currently only counts the total cost not weekly
      const total = devices.reduce((sum, device) => sum + device.estimatedCost, 0).toFixed(2);//2 decimal only
      setEstimatedCost(parseFloat(total));
    }

    useEffect(() => { //this will run every time the devices array changes
      countLowBatteryDevices();
      countTotalConsumption();
      countTotalCost();
    }, [devices]);

  useEffect(() => { 
    getDevicesData();
  }, []);

  return (
    <View style={styles.app}>
      <Text style={styles.title}>Overview</Text>
      <View style={styles.overviewContainer}>
        <OverviewCard iconName="flash-outline" iconColor="blue" name="Power consumption" num={10.43} kwh="kWh" />
        <OverviewCard iconName="alert-outline" iconColor="red" name="Low devices" num={lowDevices} />
        <OverviewCard iconName="cash-outline" iconColor="green" name="Estimated cost" num={estimatedCost} />
      </View>
      {/* this will display the chart of the week */}
      <PowerUsage/>
      {/* this will show the total consumption for the week */}
      <TotalConsumption iconName="flash-outline" iconColor="blue" power={totalConsumption}/>

      <View>
      <Text style={styles.subTitle}>Biggest eaters</Text>
      <ScrollView style={styles.usedDevices}>

        {sortedDevices.map((device, index) => ( //map out all devices in descending order
          <AddDevice key={index} icon="📱" name={device.name} power={device.wattage} />
        ))}
        
      </ScrollView>
    </View>

    </View>
  );
};

export default Dashboard;
