import { darkTheme, lightTheme } from "@/styles/theme";
import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { Device } from "@/Types/Device";
import { getStyles } from "@/styles/updateDevice";

const EditDevice = () => {
  const [deviceData, setDeviceData] = useState<Device>({
    name: "iPhone 12",
    type: "Phone", // Default option for the Picker
    serialNumber: "SN123456789",
    condition: "Great",
    notes: "No issues, working perfectly.",
    groupName: "Phones",
    groupID: "",
    cycles: 12,
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

  const handleChange = (name: keyof Device, value: string) => {
    setDeviceData({
      ...deviceData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Updated Device Data:", deviceData);
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
          <Text style={styles.title}>Edit Device</Text>

          {/* Editable Fields */}
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

          {/* Non-Editable Fields */}
          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Serial Number</Text>
            <Text style={styles.nonEditableText}>{deviceData.serialNumber}</Text>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Type</Text>
            <Text style={styles.nonEditableText}>{deviceData.type}</Text>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Cycles</Text>
            <Text style={styles.nonEditableText}>{deviceData.cycles}</Text>
          </View>

          {/* Editable Fields */}
          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Condition</Text>
            <TextInput
              style={styles.input}
              value={deviceData.condition}
              onChangeText={(value) => handleChange("condition", value)}
              placeholder="Enter condition"
              placeholderTextColor={theme.textColor}
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

export default EditDevice;
