// This function starts the device simulation and
// updates the database to simulate the devices

import { DeviceService } from "@/Services/DeviceService"
import { GroupService } from "@/Services/GroupService"
import { storeData } from "@/storage/storage"
import { Device } from "@/Types/Device"
import { Response } from "@/Types/Reponse"
import { Alert } from "react-native"

// are being updated in real time.
export const startDeviceSimulation = (): void => {
  const interval = 10000

  setInterval(async () => {
    generateRandomDeviceData()
  }, interval)
}

async function generateRandomDeviceData(): Promise<void> {
  const devices: Response = await DeviceService.getDevices()
  const updatedDevices: Device[] = []

  if(devices.data.length > 0) {
    for(let i = 0; i < devices.data.length; i++) {
      const device: Device = devices.data[i]
      const randomBatteryPercentage = Math.ceil(Math.random() * 100)
  
      device.batteryPercentage = randomBatteryPercentage
      device.cycles = Math.ceil(Math.random() * 500)
      device.wattage = Number((Math.random() * 10).toFixed(2))
      device.estimatedCost = Number((device.wattage * .18).toFixed(2))
      device.estimatedLife = Number((Math.random() * 1000).toFixed(2))
  
      await DeviceService.updateDevice(device)
      updatedDevices.push(device)
    }
  
    const response = await GroupService.getGroupsByUserFromStorage();
  
    if (response.isError) {
      Alert.alert('Error', response.message);
    } else {
      const groupsData = Array.isArray(response.data) ? response.data : [];
      const groupIds = groupsData.map((group: any) => group.id);
  
      const dbDevices = await DeviceService.getDevicesByGroupIds(groupIds)
      await storeData("devices", [...dbDevices.data])
    }
  }
}