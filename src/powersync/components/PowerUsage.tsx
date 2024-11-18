
//       // <View>
//     //   <Text style={styles.subTitle}>Power Usage</Text>
//     //   <View style={styles.powerChart}>
//     //   {devices.map((device, index) => (
//     //       <Text key={index}>
//     //         {device.name}: {device.wattage} <br/>
//     //       </Text>
//     //     ))}
//     //   </View>
//     // </View>

import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from '../styles/overviewPage';
import { BarChart } from 'react-native-chart-kit';

interface Device {
  name: string;
  wattage: number;
  batteryPercentage: number;
  estimatedCost: number;
}

interface PowerUsageProps {
  devices: Device[];
}

const PowerUsage: React.FC<PowerUsageProps> = ({ devices }) => {
  // Sort devices by wattage in descending order
  const sortedDevices = [...devices].sort((a, b) => b.wattage - a.wattage);

  // Extract labels and data for the chart
  const labels = sortedDevices.map((device) => device.name);
  const data = sortedDevices.map((device) => device.wattage);

  return (
    <View>
      <Text style={styles.subTitle}>Power Usage</Text>

      <BarChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get('window').width - 40} 
        height={200}
        fromZero={true}
        yAxisInterval={5}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0,
          color: () => `rgba(0, 0, 0, 1)`,
          labelColor: () => `rgba(0, 0, 0, 0.6)`,
          propsForBackgroundLines: {
            strokeDasharray: '', // solid background lines
            stroke: '#E0E0E0',
          },
          propsForLabels: {
            dy: 2,
            // dx: -8, // move labels closer to the left side
          },
        }}
        style={{
          marginVertical: 6,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default PowerUsage;
