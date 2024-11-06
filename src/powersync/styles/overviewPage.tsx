import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    app: {
      fontFamily: 'sans-serif', // This may vary depending on platform
      borderWidth: 1,
      padding: 15,
      backgroundColor: '#E9F5FF',
      flex: 1, // Take up available screen space
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
      height: 150,
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
        padding: 10,  
      },
      powerChart: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: 120,
        backgroundColor: 'white',
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
      },
  });


  export default styles;