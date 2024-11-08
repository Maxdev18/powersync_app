import { collection, addDoc, getDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { Device } from "@/Types/Device";
import { Response } from "@/Types/Reponse";

export class DeviceService {
  async createDevice(data: Device): Promise<Response> {
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

      const response: Response = {
        message: "Error creating device",
        isError: true
      }

      return response
    }
  }
}