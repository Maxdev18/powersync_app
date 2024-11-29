import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    app: {
      fontFamily: 'sans-serif', // This may vary depending on platform
      borderWidth: 1,
      padding: 15,
      backgroundColor: '#FFF5E9',
      flex: 1, // Take up available screen space
    },
    icon:{
      position: 'absolute',
      top: 8,
      right: 8,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 5
    },
    overviewContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: "space-between",
    },
    usedDevices: {
      borderRadius: 5,
      height: 200,
      backgroundColor: 'white',
    },
    subFont: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 5,
    },
    unique: {
      fontSize: 36, 
      fontWeight: 'bold',
    },
    normalFont: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 5,
      backgroundColor: 'rgba(255, 255, 255, 70)',
      width: '47%',
      height: 120,
      padding: 8,  
      paddingBottom: 0,
    },
    itemOverRide: {
      width: '100%'
    },
    overviewCardTextContainer: {
      display: 'flex',
      justifyContent: "space-between",
      marginTop: 'auto',
      marginBottom: 8,
    },
    overviewUnitTextDollar: {
      fontWeight: 'bold',
      fontSize: 36
    },
    overviewUnitText: {
      marginTop: "auto",
      fontSize: 20,
      fontWeight: 'bold'
    },
    powerChart: {
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      height: 120,
      backgroundColor: 'white',
    },
    subTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    weeklyConsumption: {
      marginTop: 20,
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 10,
    },
    biggestEaterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    groupItem1Text: {
      color: 'white',
    },
    groupItem1: {
      width: 36,
      height: 36,
      borderRadius: 50,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    groupItem2: {
      marginLeft: 12,
      flexGrow: 4,
    },
    usedMostName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    logo: {
      fontSize: 14,
      color: 'gray',
    },
    power: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default styles;