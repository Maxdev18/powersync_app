

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
  // Sort devices by wattage in descending order and show three top devices
  const sortedDevices = [...devices].sort((a, b) => b.wattage - a.wattage).slice(0, 3);

  // Extract labels and data for the chart
  const labels = sortedDevices.map((device) => device.name);
  const data = sortedDevices.map((device) => device.wattage);

  return (
    <View>
      <BarChart
        data={{
          labels: labels,
          datasets: [{
              data: data,
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} 
        height={200}
        fromZero={true}
        yAxisInterval={5}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0,
          color: () => `rgba(0, 0, 0, 3)`,
          // labelColor: () => `black`,
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
