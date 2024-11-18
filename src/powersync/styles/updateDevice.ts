import { StyleSheet } from 'react-native';

export const getStyles = (theme: any) =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
        justifyContent: "space-between",
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
        color: theme.buttonColor,
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
        color: theme.textColor,
        marginBottom: 20,
      },
      formGroup: {
        marginBottom: 15,
      },
      textColor: {
        color: theme.textColor,
      },
      input: {
        width: "100%",
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: theme.inputBackgroundColor,
        color: theme.inputTextColor,
      },
      textarea: {
        width: "100%",
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        height: 80,
        backgroundColor: theme.inputBackgroundColor,
        color: theme.inputTextColor,
      },
      nonEditableText: {
        width: "100%",
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: theme.inputBackgroundColor,
        color: theme.inputTextColor,
        textAlignVertical: "center",
      },
      picker: {
        width: "100%",
        height: 50, // Matching input field height
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: theme.inputBackgroundColor,
        color: theme.inputTextColor,
      },
      scanButton: {
        backgroundColor: theme.buttonColor,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: "flex-end",
      },
      scanButtonText: {
        color: theme.buttonTextColor,
      },
      saveButton: {
        backgroundColor: theme.buttonColor,
        borderRadius: 5,
        padding: 15,
        alignItems: "center",
        marginTop: 20,
      },
      saveButtonText: {
        color: theme.buttonTextColor,
        fontWeight: "bold",
      },
      footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: theme.footerBackgroundColor,
        borderTopWidth: 1,
        borderColor: "#ccc",
      },
      footerButton: {
        alignItems: "center",
      },
      footerButtonText: {
        color: theme.footerTextColor,
      },
      message: { textAlign: "center", marginBottom: 10, fontSize: 16, }, 
      errorMessage: { color: '#FF6464', }, 
      successMessage: { color: '#4CAF50', },
    });