import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    app: {
      fontFamily: 'sans-serif', // This may vary depending on platform
      borderWidth: 1,
      padding: 15,
      backgroundColor: '#E9F5FF',
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
      height: 180,
      backgroundColor: 'white',
    },
    subFont: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 5,
    },
    unique: {
        fontSize: 21, 
        fontWeight: 'bold',
      },
    normalFont: {
        fontSize: 14,
        fontWeight: 'bold',
      },
    item: {
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        width: '47%', 
        padding: 5,  
        paddingBottom: 0,
        borderColor: 'rgba(0, 0, 0, 0.2)',
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
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 8,
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
        backgroundColor: 'white',
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