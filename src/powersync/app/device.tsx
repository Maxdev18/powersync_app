import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import styles from '../styles/device';

interface Device {
  id: number;
  name: string;
  battery: string;
  icon: string;
}

interface DeviceGroup {
  id: number;
  name: string;
  devices: Device[];
  isExpanded: boolean;
}

const DevicesScreen = () => {
  const navigation = useNavigation(); // Use the navigation hook

  const [deviceGroups, setDeviceGroups] = useState<DeviceGroup[]>([
    {
      id: 1,
      name: "Carl's devices",
      devices: [
        { id: 1, name: 'Garage flashlight', battery: '80%', icon: 'flashlight-outline' },
        { id: 2, name: 'Powerbank', battery: '19%', icon: 'battery-charging-outline' },
        { id: 3, name: 'Tablet', battery: '34%', icon: 'tablet-portrait-outline' },
      ],
      isExpanded: true,
    },
    {
      id: 2,
      name: "Max's devices",
      devices: [],
      isExpanded: false,
    },
    {
      id: 3,
      name: "Tanner's devices",
      devices: [],
      isExpanded: false,
    },
  ]);

  const [newGroupName, setNewGroupName] = useState('');
  const [showInput, setShowInput] = useState(false);

  const toggleGroupExpansion = (groupId: number) => {
    setDeviceGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId ? { ...group, isExpanded: !group.isExpanded } : group
      )
    );
  };

  const addDeviceGroup = () => {
    if (newGroupName.trim()) {
      const newGroup: DeviceGroup = {
        id: deviceGroups.length + 1,
        name: newGroupName,
        devices: [],
        isExpanded: false,
      };
      setDeviceGroups((prevGroups) => [...prevGroups, newGroup]);
      setShowInput(false);
      setNewGroupName('');
    } else {
      Alert.alert('Please enter a valid name');
    }
  };

  const handleDeleteGroup = (groupId: number) => {
    Alert.alert(
      'Delete Group',
      'Are you sure you want to delete this group?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setDeviceGroups((prevGroups) => prevGroups.filter((group) => group.id !== groupId));
          },
        },
      ]
    );
  };

  const getBatteryColor = (battery: string) => {
    const percentage = parseInt(battery.replace('%', ''));
    if (percentage >= 80) return '#4CAF50';
    if (percentage >= 30) return '#FFA726';
    return '#F44336';
  };

  const isValidIcon = (icon: string): icon is keyof typeof Ionicons.glyphMap => {
    return icon in Ionicons.glyphMap;
  };

  const renderIcon = (icon: string) => {
    const validIcon = isValidIcon(icon) ? icon : 'help-circle-outline';
    return <Ionicons name={validIcon} size={20} color="black" />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your devices</Text>
        <TouchableOpacity
          style={styles.addDeviceButton}
          onPress={() => navigation.navigate('+Device')} // Navigate to the AddDevice tab
        >
          <Text style={styles.addDeviceButtonText}>+ Add device</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {deviceGroups.map((group) => (
          <View key={group.id} style={styles.deviceGroup}>
            <TouchableOpacity
              style={styles.deviceGroupHeader}
              onPress={() => toggleGroupExpansion(group.id)}
            >
              <Text style={styles.deviceGroupTitle}>
                {group.name} {group.isExpanded ? '▼' : '▶'}
              </Text>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => handleDeleteGroup(group.id)}
              >
                <Ionicons name="settings-outline" size={20} color="gray" />
              </TouchableOpacity>
            </TouchableOpacity>

            {group.isExpanded && (
              <>
                {group.devices.map((device) => (
                  <View key={device.id} style={styles.deviceItem}>
                    {renderIcon(device.icon)}
                    <Text style={styles.deviceName}>{device.name}</Text>
                    <View style={styles.batteryContainer}>
                      <Text
                        style={[
                          styles.batterySymbol,
                          { color: getBatteryColor(device.battery) },
                        ]}
                      >
                        ⚡
                      </Text>
                      <Text style={styles.deviceBattery}>{device.battery}</Text>
                    </View>
                  </View>
                ))}
              </>
            )}
          </View>
        ))}
      </ScrollView>

      {showInput ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter group name"
            value={newGroupName}
            onChangeText={setNewGroupName}
          />
          <TouchableOpacity onPress={addDeviceGroup} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Group</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setShowInput(true)} style={styles.addGroupButton}>
          <Text style={styles.addGroupButtonText}>+ Add Group</Text>
        </TouchableOpacity>
      )}

      {/* Delete Group ID 3 Button */}
      <TouchableOpacity
        onPress={() => handleDeleteGroup(3)}
        style={styles.deleteGroupButton}
      >
        <Text style={styles.deleteGroupButtonText}>Delete Group ID 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DevicesScreen;
