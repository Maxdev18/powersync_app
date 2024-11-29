import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GroupService } from '@/Services/GroupService';
import { DeviceService } from '@/Services/DeviceService';
import styles from '../styles/device';
import { Group as GroupType } from '@/Types/Group';
import { getData } from '@/storage/storage';

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

const DevicesScreen = () => {
  const navigation = useNavigation();
  const [deviceGroups, setDeviceGroups] = useState<DeviceGroup[]>([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [groupInputValue, setGroupInputValue] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState<string | null>(null);
  const [groupToUpdate, setGroupToUpdate] = useState<string | null>(null);

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
              devices: devices?.filter((device: Device) => device.groupID === group.id),
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

  const addDeviceGroup = async () => {
    if (newGroupName.trim()) {
      const newGroup: DeviceGroup = {
        id: (deviceGroups.length + 1).toString(),
        name: newGroupName,
        devices: [],
        isExpanded: false,
      };

      const group: GroupType = {
        name: newGroupName,
        numberOfDevices: 0,
        userId: (await getData("user")).id
      };

      await GroupService.createGroup(group);
      setDeviceGroups((prevGroups) => [...prevGroups, newGroup]);
      setShowInput(false);
      setNewGroupName('');
    } else {
      Alert.alert('Please enter a valid name');
    }
  };

  const handleDeleteGroup = async (groupId: string) => {
    const response = await GroupService.hasDevices(groupId);
    if (response.data) {
      Alert.alert(
        "Please remove devices from group",
        "",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ]
      );
    } else {
      const deleteResponse = await GroupService.deleteGroup(groupId);
      if (!deleteResponse.isError) {
        setDeviceGroups((prevGroups) => prevGroups.filter(group => group.id !== groupId));
      } else {
        Alert.alert('Error', deleteResponse.message);
      }
    }
  };

  const handleSaveGroup = async () => {
    if (groupToUpdate && groupInputValue.trim()) {
      const response = await GroupService.updateGroupName(groupToUpdate, groupInputValue);
      if (!response.isError) {
        setDeviceGroups((prevGroups) =>
          prevGroups.map((group) =>
            group.id === groupToUpdate ? { ...group, name: groupInputValue } : group
          )
        );
        setModalVisible(false);
        setGroupInputValue('');
      } else {
        Alert.alert('Error', response.message);
      }
    } else {
      Alert.alert('Please enter a valid name');
    }
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

  const handleEditDevice = (deviceId: string) => {
    setSelectedDeviceId(deviceId); // **Added this line to set selected device id**
    navigation.navigate('Edit Device', { deviceId }); // **Updated to pass the selected deviceId**
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
                onPress={() => {
                  setModalVisible(true);
                  setGroupToDelete(group.id);
                  setGroupToUpdate(group.id);
                  setGroupInputValue(group.name);
                }}
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
                  <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => navigation.navigate('Edit Device', { deviceId: device.id })}
                    >
                    <Ionicons name="ellipsis-vertical" size={20} color="gray" />
                  </TouchableOpacity>
                </View>
              ))
            )}
          </View>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {confirmDelete ? (
              <>
                <Text>{`Are you sure you want to delete ${deviceGroups.find(group => group.id === groupToDelete)?.name}?`}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity
                    onPress={() => {
                      handleDeleteGroup(groupToDelete!);
                      setConfirmDelete(false);
                      setModalVisible(false);
                    }}
                    style={styles.modalButton}
                  >
                    <Text style={styles.modalButtonText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setConfirmDelete(false);
                      setModalVisible(false);
                    }}
                    style={styles.modalButton}
                  >
                    <Text style={styles.modalButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Change Name"
                  value={groupInputValue}
                  onChangeText={setGroupInputValue}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity
                    onPress={handleSaveGroup}
                    style={styles.modalButton}
                  >
                    <Text style={styles.modalButtonText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setConfirmDelete(true)}
                    style={[styles.modalButton, { backgroundColor: '#FF6B6B' }]}
                  >
                    <Text style={styles.modalButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

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
    </View>
  );
};

export default DevicesScreen;