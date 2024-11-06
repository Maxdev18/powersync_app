


import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker'; // Importing Picker

type DeviceData = {
  name: string;
  group: string;
  serialNumber: string;
  cycles: number;
  condition: string;
  type: string;
  notes: string;
};

const lightTheme = {
  backgroundColor: "#f7f9fc",
  textColor: "#333",
  inputBackgroundColor: "#fff",
  inputTextColor: "#000",
  buttonColor: "#007bff",
  buttonTextColor: "#fff",
  footerBackgroundColor: "#f0f0f0",
  footerTextColor: "#333",
};

const darkTheme = {
  backgroundColor: "#1c1c1e",
  textColor: "#f7f7f7",
  inputBackgroundColor: "#2c2c2e",
  inputTextColor: "#f7f7f7",
  buttonColor: "#0a84ff",
  buttonTextColor: "#fff",
  footerBackgroundColor: "#2c2c2e",
  footerTextColor: "#f7f7f7",
};

const AddDevice = () => {
  const [deviceData, setDeviceData] = useState<DeviceData>({
    name: "",
    group: "",
    serialNumber: "",
    cycles: 12,
    condition: "Great",
    type: "Phone", // Default option for the Picker
    notes: "",
  });

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleChange = (name: keyof DeviceData, value: string) => {
    setDeviceData({
      ...deviceData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Device Data:", deviceData);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;
  const styles = getStyles(theme);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Go back to your devices</Text>
          </TouchableOpacity>
          <Button title={`Switch to ${isDarkMode ? "Light" : "Dark"} Mode`} onPress={toggleTheme} />
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://home-gadgets-gizmos.com/cdn/shop/articles/Pngtree_gadgets_in_a_striking_3d_7276667.jpg?v=1724501861&width=533" }}
            style={styles.image}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Add a device</Text>

          <View style={styles.formGroup}>
            <TouchableOpacity style={styles.scanButton}>
              <Text style={styles.scanButtonText}>Scan</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Name</Text>
            <TextInput
              style={styles.input}
              value={deviceData.name}
              onChangeText={(value) => handleChange("name", value)}
              placeholder="Enter device name"
              placeholderTextColor={theme.textColor}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Group</Text>
            <TextInput
              style={styles.input}
              value={deviceData.group}
              onChangeText={(value) => handleChange("group", value)}
              placeholder="Enter group"
              placeholderTextColor={theme.textColor}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Serial Number</Text>
            <TextInput
              style={styles.input}
              value={deviceData.serialNumber}
              onChangeText={(value) => handleChange("serialNumber", value)}
              placeholder="Enter Serial Number"
              placeholderTextColor={theme.textColor}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Type</Text>
            <Picker
              selectedValue={deviceData.type}
              style={styles.picker} // Picker styling
              onValueChange={(itemValue) => handleChange("type", itemValue)}
            >
              <Picker.Item label="Phone" value="Phone" />
              <Picker.Item label="Tablet" value="Tablet" />
              <Picker.Item label="Headphones" value="Headphones" />
            </Picker>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Cycles</Text>
            <TextInput
              style={styles.input}
              value={`${deviceData.cycles}`}
              keyboardType="numeric"
              editable={false}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Condition</Text>
            <TextInput
              style={styles.input}
              value={deviceData.condition}
              editable={false}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Notes</Text>
            <TextInput
              style={styles.textarea}
              value={deviceData.notes}
              onChangeText={(value) => handleChange("notes", value)}
              placeholder="Enter any notes"
              multiline={true}
              placeholderTextColor={theme.textColor}
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Devices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>GPS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const getStyles = (theme: any) =>
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
  });

export default AddDevice;
