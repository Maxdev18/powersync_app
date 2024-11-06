import { StyleSheet } from 'react-native';


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
        fontSize: 24, 
      },
    normalFont: {
        fontSize: 14,
        fontWeight: 'bold',
      },
    item: {
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 2,
        width: '47%', 
        padding: 10,  
      },
      powerChart: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
        height: 120,
        backgroundColor: 'white',
      },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
      },
  });


  export default styles;