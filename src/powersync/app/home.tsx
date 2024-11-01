import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OverviewCard from '../components/OverviewCard';
import PowerUsage from '../components/PowerUsage';

const Home: React.FC = () => {
  return (
    <View style={styles.app}>
      <Text style={styles.title}>Overview</Text>
      
      <View style={styles.overviewContainer}>
        <OverviewCard name="Power consumption" num={10.43} kwh="kWh" />
        <OverviewCard name="Low devices" num={1} />
        <OverviewCard name="Estimated cost" num="$1.89" />
      </View>
      
      <PowerUsage/>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    fontFamily: 'sans-serif', // This may vary depending on platform
    borderColor: 'red',
    borderWidth: 2,
    padding: 15,
    backgroundColor: '#E9F5FF',
    flex: 1, // Take up available screen space
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  overviewContainer: {
    // marginVertical: 5,
    borderColor: 'red',
    borderWidth: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: "space-between",
  },
});

export default Home;
