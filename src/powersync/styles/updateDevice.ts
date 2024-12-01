import { StyleSheet } from 'react-native';

const createStyles = (theme: { theme: any }) =>
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor:theme.theme === 'light' ? '#FFF5E9' : '#151414',

      },
      scrollContainer: {
        flexGrow: 1,
      },
      header: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      backButton: {
        alignSelf: "flex-start",
      },
      backButtonText: {
        // color: theme.buttonColor,
        textDecorationLine: "underline",
      },
      imageContainer: {
        width: "100%",
        alignItems: "center",
      },
      image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
      },
      formContainer: {
        flex: 1,
        padding: 20,
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
        marginBottom: 20,
      },
      formGroup: {
        marginBottom: 15,
      },
      textColor: {
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      input: {
        width: "100%",
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor:theme.theme === 'light' ? '#FFFFFF' : '#434343',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      textarea: {
        width: "100%",
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        height: 80,
        backgroundColor:theme.theme === 'light' ? '#FFFFFF' : '#434343',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      picker: {
        width: "100%",
        height: 50, // Matching input field height
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor:theme.theme === 'light' ? '#FFFFFF' : '#434343',
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      scanButton: {
        backgroundColor:'#12B8FF', 
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: "flex-end",
      },
      scanButtonText: {
        // color: theme.buttonTextColor,
      },
      saveButton: {
        backgroundColor: '#12B8FF',
        borderRadius: 25,
        padding: 8,
        alignItems: "center",
        marginTop: 20,
      },
      saveButtonText: {
        color: '#F3EBEB',
        fontWeight: "bold",
        fontSize: 22,
      },
      footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor:theme.theme === 'light' ? '#FFFFFF' : '#434343',
        borderTopWidth: 1,
        borderColor: "#ccc",
      },
      nonEditableText: {
        width: "100%",
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: theme.theme === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(67, 67, 67, 0.5)', // Reduced opacity
        color: theme.theme === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(243, 235, 235, 0.5)', // Reduced opacity
        textAlignVertical: "center",
    },
      footerButton: {
        alignItems: "center",
      },
      footerButtonText: {
        color: theme.theme === 'light' ? 'black' : '#F3EBEB',
      },
      message: { textAlign: "center", marginBottom: 10, fontSize: 16, }, 
      errorMessage: { color: '#FF6464', }, 
      successMessage: { color: '#4CAF50', },
    });
  
    export default createStyles;