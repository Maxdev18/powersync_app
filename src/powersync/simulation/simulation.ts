// This function starts the device simulation and
// updates the database to simulate the devices

import { DeviceService } from "@/Services/DeviceService"
import { updateKey } from "@/storage/storage"
import { Device } from "@/Types/Device"
import { Response } from "@/Types/Reponse"

// are being updated in real time.
export const startDeviceSimulation = (): void => {
  const interval = 10000

  setInterval(async () => {
    // 1. Call random generation function
    generateRandomDeviceData()
  }, interval)
}

async function generateRandomDeviceData(): Promise<void> {
  const devices: Response = await DeviceService.getDevices()
  console.log(devices.data)
  const updatedDevices: Device[] = []

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

  const dbDevices = await DeviceService.getDevices()
  await updateKey("devices", dbDevices.data)
}