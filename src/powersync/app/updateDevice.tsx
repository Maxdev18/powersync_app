import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { DeviceService } from "@/Services/DeviceService";
import { Device } from "@/Types/Device";
import { darkTheme, lightTheme } from "@/styles/theme";
import { getStyles } from "@/styles/updateDevice";
import { db } from '../firebaseConfig';
import { getData } from "@/storage/storage"; // Fetch user data from storage
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

const EditDevice = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('');
  const [deviceData, setDeviceData] = useState<Partial<Device>>({});
  const [groups, setGroups] = useState<{ id: string, name: string }[]>([]);
  const [selectedGroupId, setSelectedGroupId] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const devicesCollection = await getDocs(collection(db, 'device'));
        const devicesList = devicesCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Device[];
        setDevices(devicesList);
      } catch (error) {
        console.error("Error fetching devices: ", error);
      }
    };

    const fetchGroups = async () => {
      try {
        const user = await getData("user"); // Retrieve logged-in user data
        if (!user?.id) {
          setMessage("User not logged in.");
          setMessageType("error");
          return;
        }

        // Query groups where userId matches the logged-in user's ID
        const groupsQuery = query(
          collection(db, "group"),
          where("userId", "==", user.id)
        );

        const groupsCollection = await getDocs(groupsQuery);
        const groupsList = groupsCollection.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }));
        setGroups(groupsList);
      } catch (error) {
        console.error("Error fetching groups: ", error);
        setMessage("Error fetching groups.");
        setMessageType("error");
      }
    };

    fetchDevices();
    fetchGroups();
  }, []);

  useEffect(() => {
    const fetchDeviceDetails = async () => {
      if (selectedDeviceId) {
        try {
          const deviceDoc = await getDoc(doc(db, 'device', selectedDeviceId));
          if (deviceDoc.exists()) {
            setDeviceData({ id: deviceDoc.id, ...deviceDoc.data() });
            setSelectedGroupId(deviceDoc.data().groupID); // Set the initial group ID
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching device details: ", error);
        }
      }
    };

    fetchDeviceDetails();
  }, [selectedDeviceId]);

  useEffect(() => {
    if (selectedGroupId) {
      const selectedGroup = groups.find(group => group.id === selectedGroupId);
      if (selectedGroup) {
        setDeviceData({
          ...deviceData,
          groupID: selectedGroup.id,
          groupName: selectedGroup.name,
        });
      }
    }
  }, [selectedGroupId]);

  const handleChange = (name: keyof Device, value: string) => {
    setDeviceData({
      ...deviceData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    if (!selectedDeviceId) {
      setMessage("Please select a device.");
      setMessageType("error");
      return;
    }

    if (!deviceData.name || !deviceData.type || !deviceData.serialNumber || !deviceData.condition) {
      setMessage("Please fill in all required fields: Name, Type, Serial Number, and Condition.");
      setMessageType("error");
      return;
    }

    try {
      const response = await DeviceService.updateDevice(deviceData as Device);
      if (!response.isError) {
        setMessage("Device updated successfully!");
        setMessageType("success");
      } else {
        setMessage("Failed to update device.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error updating device:", error);
      setMessage("An error occurred while updating the device.");
      setMessageType("error");
    }
  };

  const theme = lightTheme;
  const styles = getStyles(theme);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://home-gadgets-gizmos.com/cdn/shop/articles/Pngtree_gadgets_in_a_striking_3d_7276667.jpg?v=1724501861&width=533" }}
            style={styles.image}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Edit Device</Text>

          <View style={styles.formGroup}>
            <Text style={styles.textColor}>Name</Text>
            <Picker
              selectedValue={selectedDeviceId}
              onValueChange={(itemValue) => setSelectedDeviceId(itemValue)}
              style={styles.picker}
            >
              {/* Set an empty value with the placeholder label */}
              <Picker.Item label="Select device" value="" enabled={false} />
              {devices.map(device => (
                <Picker.Item key={device.id} label={device.name} value={device.id} />
              ))}
            </Picker>
          </View>

          {selectedDeviceId && (
            <>
              <View style={styles.formGroup}>
                <Text style={styles.textColor}>Group</Text>
                <Picker
                  selectedValue={selectedGroupId}
                  onValueChange={(itemValue) => setSelectedGroupId(itemValue)}
                  style={styles.picker}
                >
                  {groups.map(group => (
                    <Picker.Item key={group.id} label={group.name} value={group.id} />
                  ))}
                </Picker>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.textColor}>Serial Number</Text>
                <Text style={styles.nonEditableText}>{deviceData.serialNumber}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.textColor}>Type</Text>
                <Text style={styles.nonEditableText}>{deviceData.type}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.textColor}>Condition</Text>
                <Picker
                  selectedValue={deviceData.condition}
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
                  value={deviceData.notes || ''}
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
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default EditDevice;
