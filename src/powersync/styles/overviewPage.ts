import { StyleSheet } from 'react-native';

const createStyles = (theme: { theme: any }) =>
  StyleSheet.create({
    app: {
      fontFamily: 'sans-serif', // This may vary depending on platform
      borderWidth: 1,
      padding: 15,
      backgroundColor:theme.theme === 'light' ? '#edfaff' : '#333333',
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
      height: 180,
      backgroundColor:theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    subFont: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 5,
    },
    unique: {
        fontSize: 21, 
        fontWeight: '600',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
    normalFont: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
    item: {
        borderRadius: 5,
        backgroundColor:theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
        borderWidth: 1,
        width: '47%', 
        padding: 5,  
        paddingBottom: 0,
       borderColor: theme.theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : '#ffffff'
      },
      powerChart: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        height: 120,
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 0.2)',
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
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        borderRadius: 5,
        backgroundColor:theme.theme === 'light' ? '#ffffff' : '#5E5B5B',
        borderColor: 'rgba(0, 0, 0, 0.2)',
      },
      
      groupItem1: {
        flexGrow: 1,
        alignItems: 'center',
      },
      groupItem2: {
        flexGrow: 4,
        paddingLeft: 5,
        
      },
      usedMostName: {
        fontSize: 18,
        fontWeight: '600',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
        padding: 10
      },
      logo: {
        fontSize: 14,
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      power: {
        fontSize: 16,
        fontWeight: '600',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
  });


  export default createStyles;