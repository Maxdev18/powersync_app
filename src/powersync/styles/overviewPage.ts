import { StyleSheet } from 'react-native';

const createStyles = (theme: { theme: any }) =>
  StyleSheet.create({
    app: {
      fontFamily: 'sans-serif', // This may vary depending on platform
      padding: 15,
      backgroundColor:theme.theme === 'light' ? '#FFF5E9' : '#151414',
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
      margin: 5,
      color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      marginBottom: 15,
    },
    overviewContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: "space-between",
    },
    usedDevices: {
      borderRadius: 5,
   
      backgroundColor:theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      height: 200,
     
    },
    subFont: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 5,
    },
    unique: {
      fontSize: 36, 
      fontWeight: 'bold',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      
   
    normalFont: {
        fontSize: 14,
        fontWeight: '700',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
    item: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 5,
      backgroundColor:  theme.theme === 'light' ?'rgba(255, 255, 255, 70)': '#5E5B5B',
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
      fontSize: 36,
      color: theme.theme === 'light' ? 'black' : '#F3EBEB',
    },
    overviewUnitText: {
      marginTop: "auto",
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.theme === 'light' ? 'black' : '#F3EBEB',
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
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      weeklyConsumption: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        borderColor: 'rgba(0, 0, 0, 0.2)',
      },

      biggestEaterContainer: {
        display: 'flex',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor:theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
        borderColor: 'rgba(0, 0, 0, 0.2)',
      },
      
      groupItem1: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 5,
        width: 10,
      },
      groupItem2: {
        flexGrow: 4,
        // paddingLeft: 5,
        padding: 5,
      },
      usedMostName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      logo: {
        fontSize: 14,
        color: 'gray',
      },
      power: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
  });


  export default createStyles;