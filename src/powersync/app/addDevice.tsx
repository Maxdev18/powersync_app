import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from "react-native";

type DeviceData = {
  name: string;
  group: string;
  serialNumber: string;
  cycles: number;
  condition: string;
  type: string;
  notes: string;
};

const AddDevice: React.FC = () => {
  const [deviceData, setDeviceData] = useState<DeviceData>({
    name: "",
    group: "",
    serialNumber: "9251693562395691823",
    cycles: 12,
    condition: "Great",
    type: "Flashlight",
    notes: "",
  });

  const handleChange = (name: keyof DeviceData, value: string) => {
    setDeviceData({
      ...deviceData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Logic for saving the device data
    console.log("Device Data:", deviceData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Go back to your devices</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://home-gadgets-gizmos.com/cdn/shop/articles/Pngtree_gadgets_in_a_striking_3d_7276667.jpg?v=1724501861&width=533",
          }}
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
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            value={deviceData.name}
            onChangeText={(value) => handleChange("name", value)}
            placeholder="Enter device name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text>Group</Text>
          <TextInput
            style={styles.input}
            value={deviceData.group}
            onChangeText={(value) => handleChange("group", value)}
            placeholder="Enter group"
          />
        </View>

        <View style={styles.formGroup}>
          <Text>Serial Number</Text>
          <TextInput
            style={styles.input}
            value={deviceData.serialNumber}
            editable={false}
          />
        </View>

        <View style={styles.formGroup}>
          <Text>Type</Text>
          <TextInput
            style={styles.input}
            value={deviceData.type}
            editable={false}
          />
        </View>

        <View style={styles.formGroup}>
          <Text>Cycles</Text>
          <TextInput
            style={styles.input}
            value={`${deviceData.cycles}`}
            keyboardType="numeric"
            editable={false}
          />
        </View>

        <View style={styles.formGroup}>
          <Text>Condition</Text>
          <TextInput
            style={styles.input}
            value={deviceData.condition}
            editable={false}
          />
        </View>

        <View style={styles.formGroup}>
          <Text>Notes</Text>
          <TextInput
            style={styles.textarea}
            value={deviceData.notes}
            onChangeText={(value) => handleChange("notes", value)}
            placeholder="Enter any notes"
            multiline={true}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9fc",
    justifyContent: "space-between",
  },
  header: {
    padding: 10,
  },
  backButton: {
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#007bff",
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
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  textarea: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    height: 80,
  },
  scanButton: {
    backgroundColor: "#007bff",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-end",
  },
  scanButtonText: {
    color: "#fff",
  },
  saveButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  footerButton: {
    alignItems: "center",
  },
  footerButtonText: {
    color: "#333",
  },
});

export default AddDevice;
