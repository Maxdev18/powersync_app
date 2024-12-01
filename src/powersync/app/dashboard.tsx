import React from 'react';
import { View, Text} from 'react-native';
import OverviewCard from '../components/OverviewCard';
import PowerUsage from '../components/PowerUsage';
import AddDevice from "../components/AddDevice";
import createStyles from '../styles/overviewPage'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useContext } from 'react';
import themeContext from '@/theme/themeContext';
import { getData } from '@/storage/storage';


interface Device {
  name: string;
  wattage: number;
  batteryPercentage: number;
  estimatedCost: number;
}

const Dashboard: React.FC = () => { 
  const [devices, setDevices] = useState<Device[]>([]); 
  const [lowDevices, setLowDevices] = useState(0);
  const [dailyConsumption, setDailyConsumption] = useState(0);
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [firstName, setFirstName] = useState("")
  const theme = useContext(themeContext); // get the theme from the context
  const styles = createStyles(theme);

  const getDevicesData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('devices'); // get the devices data from local storage
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      setDevices(data); //now devices is an array of objects
    } catch (e) {
      console.error('Error retrieving devices data from local storage', e);
    }
  };
  //sort devices by wattage and display top 5
  const sortedDevices = [...devices].sort((a, b) => b.wattage - a.wattage).slice(0, 5);
  const countLowBatteryDevices = () => { //simply filter out devices 
    const count = devices.filter(device => device.batteryPercentage < 25).length;
    setLowDevices(count);
  };

  const countDailyConsumption = () => {
    const total = devices.reduce((sum, device) => sum + device.wattage, 0);
    setDailyConsumption(total);
  }

  const countTotalCost = () => { 
    const total = devices.reduce((sum, device) => sum + device.estimatedCost, 0).toFixed(2);//2 decimal only
    setEstimatedCost(parseFloat(total));
  }

  useEffect(() => { //this will run every time the 'devices' updates
    countLowBatteryDevices();
    countDailyConsumption();
    countTotalCost();
  }, [devices]);

  useEffect(() => {
    async function getUserFirstName() {
      const name = await getData("user")
      setFirstName(name.firstName)
    }
    getUserFirstName()
    getDevicesData();
  }, []);

  return (
    <ScrollView style={[styles.app]}>
      <Text style={[styles.title, {color: theme.color}]}>Welcome, {firstName}</Text>
      <View style={styles.overviewContainer}>
        <OverviewCard iconName="flash-outline" iconColor="#12B8FF" name="Power consumption" num={dailyConsumption.toFixed(2)} text="kWh" isLeft={false}/>
        <OverviewCard iconName="cash-outline" iconColor="#12FFB4" name="Estimated cost" num={estimatedCost} text="$" isLeft={true} />
      </View>

      <Text style={[styles.subTitle, {color:theme.color}]}>Power Usage</Text>
      <PowerUsage devices={devices} />

      <OverviewCard iconName="alert-outline" iconColor="red" name="Low devices" num={lowDevices} style={styles.itemOverRide} isLeft={false} />
    
      <View>
      <Text style={styles.subTitle}>Biggest eaters</Text>
      <ScrollView style={styles.usedDevices}>
        {sortedDevices.map((device, index) => ( //map out all devices in descending order
          <AddDevice key={index} bgColor={generateRandomColor()} name={device.name} power={device.wattage} />
        ))}
      </ScrollView>
    </View>

    </ScrollView>
  );
};

function generateRandomColor(): string {
  const validHexValues = "012345ABCDEF"
  let hexCode = "#"

  for(let i = 0; i < 6; i++) {
    hexCode += validHexValues[Math.floor(Math.random() * 12)]
  }

  return hexCode
}

export default Dashboard;
