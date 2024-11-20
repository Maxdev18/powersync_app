import { collection, addDoc, getDoc, query, where, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { Device } from "@/Types/Device";
import { Response } from "@/Types/Reponse";
import { getData, storeData, updateKey } from "@/storage/storage";

export class DeviceService {
  static async createDevice(data: Device): Promise<Response> {
    try {
      const docRef = await addDoc(collection(db, "device"), data);
      const deviceRef = await getDoc(docRef)
      const deviceId = deviceRef.id
      const deviceData = deviceRef.data()

      const response: Response = {
        message: "Created device",
        data: { ...deviceData, id: deviceId },
        isError: false
      }

      return response
    } catch (e) {
      console.error("Error creating device: ", e);

      return returnError("Error creating device")
    }
  }

  static async getDevice(id: string): Promise<Response> {
    try {
      const deviceRef = await queryDeviceRef(id)
      const deviceDoc = await getDoc(deviceRef)

      if(deviceDoc.exists()) {
        const deviceData = deviceDoc.data()

        const response: Response = {
          message: "Device found",
          data: {  ...deviceData, id },
          isError: false
        }
  
        return response
      } else {
        return returnError("Device not found")
      }
    } catch (e) {
      console.log("Unable to get device", e)

      return returnError("Unable to get device")
    }
  }

  static async getDevices(): Promise<Response> {
    try {
      // Reference the 'device' collection
      const deviceRef = collection(db, 'device');

      // Fetch all documents in the 'device' collection
      const deviceDocs = await getDocs(deviceRef);
      const devices: Device[] = [];

      // Iterate through each document
      deviceDocs.forEach((deviceDoc) => {
        devices.push({ id: deviceDoc.id, ...deviceDoc.data() as Device });
      });
  
      if (devices.length > 0) {
        return {
          message: 'Devices retrieved successfully',
          data: devices,
          isError: false,
        };
      } else {
        return returnError('No devices found');
      }
    } catch (e) {
      console.error('Unable to get devices:', e);
      return returnError('Unable to get devices');
    }
  }

  static async updateDevice(device: Device): Promise<Response> {
    try {
      const deviceRef = await queryDeviceRef(device.id as string)
      const deviceDoc = await getDoc(deviceRef)

      if(deviceDoc.exists()) {
        await updateDoc(deviceRef, device)
        const deviceDocument = await getDoc(deviceRef)
        const deviceData = deviceDocument.data()

        const response: Response = {
          message: "Update device",
          data: { ...deviceData },
          isError: false
        }

        return response
      } else {
        return returnError("Device not found")
      }
    } catch(e) {
      console.log("Unable to update device", e)
      return returnError("Unable to update device")
    }
  }

  static async deleteDevice(id: string): Promise<Response> {
    try {
      const deviceRef = await queryDeviceRef(id as string)
      const deviceDoc = await getDoc(deviceRef)

      if(deviceDoc.exists()) {
        await deleteDoc(deviceRef)
        return {
          message: "Deleted device",
          isError: false
        }
      } else {
        return returnError("Device not found")
      }
    } catch(e) {
      console.log("Unable to delete device", e)
      return returnError("Unable to delete device")
    }
  }

  static async getDeviceLocation(id: string): Promise<Response> {
    try {
      const deviceRef = await queryDeviceRef(id)
      const deviceDoc = await getDoc(deviceRef)

      if(deviceDoc.exists()) {
        const deviceData = deviceDoc.data()

        const response: Response = {
          message: "Device location found",
          data: {  ...deviceData.location },
          isError: false
        }
  
        return response
      } else {
        return returnError("Device not found")
      }
    } catch (e) {
      console.log("Unable to get device location", e)
      return returnError("Unable to get device location")
    }
  }

  static async getDevicePowerLevel(id: string): Promise<Response> {
    try {
      const deviceRef = await queryDeviceRef(id)
      const deviceDoc = await getDoc(deviceRef)

      if(deviceDoc.exists()) {
        const deviceData = deviceDoc.data()

        const response: Response = {
          message: "Device found",
          data: {  batteryPercentage: deviceData.batteryPercentage },
          isError: false
        }
  
        return response
      } else {
        return returnError("Device not found")
      }
    } catch (e) {
      console.log("Unable to get device battery percentage", e)
      return returnError("Unable to get device battery percentage")
    }
  }

  static async getDeviceEstimatedLife(id: string): Promise<Response> {
    try {
      const deviceRef = await queryDeviceRef(id)
      const deviceDoc = await getDoc(deviceRef)

      if(deviceDoc.exists()) {
        const deviceData = deviceDoc.data()

        const response: Response = {
          message: "Device found",
          data: {  estimatedLife: deviceData.estimatedLife },
          isError: false
        }
  
        return response
      } else {
        return returnError("Device not found")
      }
    } catch (e) {
      console.log("Unable to get device estimated life", e)
      return returnError("Unable to get device estimated life")
    }
  }

  static async getDevicePowerConsumption(id: string): Promise<Response> {
    try {
      const deviceRef = await queryDeviceRef(id)
      const deviceDoc = await getDoc(deviceRef)

      if(deviceDoc.exists()) {
        const deviceData = deviceDoc.data()

        const response: Response = {
          message: "Device found",
          data: {  wattage: deviceData.wattage },
          isError: false
        }
  
        return response
      } else {
        return returnError("Device not found")
      }
    } catch (e) {
      console.log("Unable to get device wattage", e)
      return returnError("Unable to get device wattage")
    }
  }

  static async getDeviceEstimatedCost(id: string): Promise<Response> {
    try {
      const deviceRef = await queryDeviceRef(id)
      const deviceDoc = await getDoc(deviceRef)

      if(deviceDoc.exists()) {
        const deviceData = deviceDoc.data()

        const response: Response = {
          message: "Device found",
          data: {  estimatedCost: deviceData.estimatedCost },
          isError: false
        }
  
        return response
      } else {
        return returnError("Device not found")
      }
    } catch (e) {
      console.log("Unable to get device estimated cost", e)
      return returnError("Unable to get device estimated cost")
    }
  }

  static async getLowDevices(id: string): Promise<Response> {
    try {
      const collectionRef = collection(db, "device")
      const deviceQuery = query(collectionRef, where('batteryPercentage', '<', 50))
      const querySnapshot = await getDocs(deviceQuery)

      const lowDevices = []
      
      for(const doc of querySnapshot.docs) {
        const deviceId = doc.id
        const deviceData = doc.data()
        lowDevices.push({ ...deviceData, id: deviceId })
      }

      const response: Response = {
        message: "Device found",
        data: { devices: lowDevices },
        isError: false
      }

      return response
    } catch (e) {
      console.log("Unable to get device estimated cost", e)
      return returnError("Unable to get device estimated cost")
    }
  }

  static async getDeviceCycles(id: string): Promise<Response> {
    try {
      const deviceRef = await queryDeviceRef(id)
      const deviceDoc = await getDoc(deviceRef)

      if(deviceDoc.exists()) {
        const deviceData = deviceDoc.data()

        const response: Response = {
          message: "Device found",
          data: {  cycles: deviceData.cycles },
          isError: false
        }
  
        return response
      } else {
        return returnError("Device not found")
      }
    } catch (e) {
      console.log("Unable to get device cycles", e)
      return returnError("Unable to get device cycles")
    }
  }

static async getDevicesByGroupIds(groupIds: string[]): Promise<Response> {
  try {
    const devices = [];

    for (let i = 0; i < groupIds.length; i++) {
      const collectionRef = collection(db, "device");
      const deviceQuery = query(collectionRef, where("groupID", "==", groupIds[i]));
      const querySnapshot = await getDocs(deviceQuery);

      if (!querySnapshot.empty) {
        for (let k = 0; k < querySnapshot.docs.length; k++) {
          const deviceDoc = querySnapshot.docs[k];
          const deviceId = deviceDoc.id;
          const deviceData = deviceDoc.data();

          devices.push({
            ...deviceData,
            id: deviceId,
          });
        }
      }
    }

    await storeData("devices", devices)

    return {
      message: "Devices found",
      data: devices,
      isError: false,
    };
  } catch (e) {
    console.log("Unable to get devices", e);
    return returnError("Unable to get devices");
  }
}

}

async function queryDeviceRef(id: string) {
  return doc(db, "device", id)
}

function returnError(message: string): Response {
  return { message, isError: true }
}