import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { DeviceService } from "@/Services/DeviceService"; // Import DeviceService
import { Device } from "@/Types/Device";
import { darkTheme, lightTheme } from "@/styles/theme";
import { getStyles } from "@/styles/addDevice";

const AddDevice = () => {
  const [errorMessage, setErrorMessage] = useState<Response | void>()
  const [deviceData, setDeviceData] = useState<Device>({
    name: "",
    type: "",
    serialNumber: "",
    condition: "",
    notes: "",
    groupName: "",
    groupID: "",
    cycles: 0,
    batteryPercentage: 0,
    wattage: 0,
    estimatedLife: 0,
    estimatedCost: 0,
    location: {
      longitude: 0,
      latitude: 0
    }
  });


  const [isDarkMode, setIsDarkMode] = useState(true);
  const [message, setMessage] = useState<string | null>(null); // State variable for the message 
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null); // State variable for message type

  const handleChange = (name: keyof Device, value: string) => {
    setDeviceData({
      ...deviceData,
      [name]: value,
    });
  };

  const handleSave = async () => {

    if (!deviceData.name || !deviceData.type || !deviceData.serialNumber || !deviceData.condition) { 
        setMessage("Please fill in all required fields: Name, Type, Serial Number, and Condition."); setMessageType("error"); 
        return;
        }

    try {
      const response = await DeviceService.createDevice(deviceData); // Call the service
      if (!response.isError) {
        setMessage("Device added successfully!"); 
        setMessageType("success");
      } else {
        setMessage("Failed to create device."); 
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error saving device:", error); 
      setMessage("An error occurred while saving the device."); 
      setMessageType("error");
    }
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
              value={deviceData.groupName}
              onChangeText={(value) => handleChange("groupName", value)}
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
              style={styles.picker}
              onValueChange={(itemValue) => handleChange("type", itemValue)}
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="Phone" value="Phone" />
              <Picker.Item label="Tablet" value="Tablet" />
              <Picker.Item label="Headphones" value="Headphones" />
            </Picker>
          </View>

          <View style={styles.formGroup}>
              <Text style={styles.textColor}>Cycles</Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  value={String(deviceData.cycles)}  // Convert to string
                  onChangeText={(value) => handleChange("cycles", value)}
                  placeholder="000"
                  placeholderTextColor={theme.textColor}
                  // editable={false}
                />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Condition</Text>
            <Picker
              selectedValue={deviceData.type}
              style={styles.picker}
              onValueChange={(itemValue) => handleChange("condition", itemValue)}
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="Great" value="Great" />
              <Picker.Item label="Good" value="Good" />
              <Picker.Item label="Ok" value="Ok" />
              <Picker.Item label="Poor" value="Poor" />
              <Picker.Item label="Badly Damaged" value="Badly Damaged" />
            </Picker>
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
          
          {message && ( 
          <Text style={[styles.message, messageType === "error" ? styles.errorMessage : styles.successMessage]}> 
              {message} 
          </Text>
          )}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddDevice;