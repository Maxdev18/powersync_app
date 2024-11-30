

import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import themeContext from '@/theme/themeContext';
import {  useContext } from 'react';

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
  
  const theme = useContext(themeContext); // get the theme from the context
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
              colors: [(opacity = 1) => '#12B8FF', (opacity = 1) => '#12B8FF', (opacity = 1) => '#12B8FF'],
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} 
        height={200}
        fromZero={true}
        yAxisInterval={5}
        chartConfig={{
          backgroundColor:theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
          backgroundGradientFrom: theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
          backgroundGradientTo: theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
          decimalPlaces: 0,
          color: () => theme.theme === 'light' ? 'black' : '#F3EBEB',
          propsForBackgroundLines: {// Customize background lines - vertical lines
            strokeDasharray: '', // solid background lines
            stroke: '#E0E0E0',
          },
          propsForLabels: {
            dy: 2,
            // dx: -8, // move labels closer to the left side
          },
          // propsForBackgroundLines: {
          //   stroke: 'black', // Change this to the desired color for inner lines
          //   strokeDasharray: '', // Optional: Customize the dash pattern
          // },
        }}
        style={{
          marginVertical: 6,
          borderRadius: 10,
          
        }}
        // withInnerLines={false}
        withCustomBarColorFromData
        flatColor
      />
    </View>
  );
};

export default PowerUsage;
