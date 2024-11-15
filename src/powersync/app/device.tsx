import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserService } from '@/Services/UserService';
import { GroupService } from '@/Services/GroupService';
import { DeviceService } from '@/Services/DeviceService';
import styles from '../styles/device';

interface Device {
  id: string;
  name: string;
  batteryPercentage: number;
  icon: string;
  groupID: string;
}

interface DeviceGroup {
  id: string;
  name: string;
  devices: Device[];
  isExpanded: boolean;
}
interface UserResponseData {
  userId: string;
}

const DevicesScreen = () => {
  const navigation = useNavigation();
  const [deviceGroups, setDeviceGroups] = useState<DeviceGroup[]>([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [userID, setUserID] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeviceGroups = async () => {
      try {
        const response = await GroupService.getGroupsByUserFromStorage();
        if (response.isError) {
          Alert.alert('Error', response.message);
        } else {
          const groupsData = Array.isArray(response.data) ? response.data : [];
          const groupIds = groupsData.map((group: any) => group.id);

          const devicesResponse = await DeviceService.getDevicesByGroupIds(groupIds);
          if (devicesResponse.isError) {
            Alert.alert('Error', devicesResponse.message);
          } else {
            const devices = devicesResponse.data;
            const groupsWithDevices = groupsData.map((group: any) => ({
              ...group,
              isExpanded: false,
              devices: devices.filter((device: Device) => device.groupID === group.id),
            }));
            setDeviceGroups(groupsWithDevices);
          }
        }
      } catch (error) {
        console.error('Error fetching device groups:', error);
      }
    };

    fetchDeviceGroups();
  }, []);

  const toggleGroupExpansion = (groupId: string) => {
    setDeviceGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId ? { ...group, isExpanded: !group.isExpanded } : group
      )
    );
  };

  const addDeviceGroup = () => {
    if (newGroupName.trim()) {
      const newGroup: DeviceGroup = {
        id: (deviceGroups.length + 1).toString(),
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

  const handleDeleteGroup = (groupId: string) => {
    setDeviceGroups((prevGroups) => prevGroups.filter(group => group.id !== groupId));
  };

  const getBatteryColor = (batteryPercentage: number) => {
    if (batteryPercentage >= 80) return '#4CAF50';
    if (batteryPercentage >= 30) return '#FFA726';
    return '#F44336';
  };

  const isValidIcon = (icon: string): icon is keyof typeof Ionicons.glyphMap => {
    return icon in Ionicons.glyphMap;
  };

  const renderIcon = (icon: string) => {
    const validIcon = isValidIcon(icon) ? icon : 'help-circle-outline';
    return <Ionicons name={validIcon} size={20} color="black" />;
  };

  const handleGetUserID = async () => {
    try {
      const response = await UserService.getUserID();

      if (response.isError) {
        Alert.alert('Error', response.message);
      } else {
        const data = response.data as UserResponseData;
        if (data.userId) {
          setUserID(data.userId);
          console.log("User ID:", data.userId);
        } else {
          Alert.alert('Error', 'User ID is not available.');
        }
      }
    } catch (error) {
      console.error('Error fetching user ID:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your devices</Text>
        <TouchableOpacity
          style={styles.addDeviceButton}
          onPress={() => navigation.navigate('+Device')}
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

            {group.isExpanded && group.devices.length > 0 && (
              group.devices.map((device) => (
                <View key={device.id} style={styles.deviceItem}>
                  {renderIcon(device.icon)}
                  <Text style={styles.deviceName}>{device.name}</Text>
                  <View style={styles.batteryContainer}>
                    <Text
                      style={[styles.batterySymbol, { color: getBatteryColor(device.batteryPercentage) }]}
                    >
                      ⚡
                    </Text>
                    <Text style={styles.deviceBattery}>{device.batteryPercentage}%</Text>
                  </View>
                </View>
              ))
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

      <TouchableOpacity onPress={handleGetUserID} style={styles.getUserIDButton}>
        <Text style={styles.getUserIDButtonText}>Get User ID</Text>
      </TouchableOpacity>

      {userID && (
        <View style={styles.userIDContainer}>
          <Text>User ID: {userID}</Text>
        </View>
      )}
    </View>
  );
};

export default DevicesScreen;
