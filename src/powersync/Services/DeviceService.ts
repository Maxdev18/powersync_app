import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { Device } from "@/Types/Device";

export class DeviceService {
    async createDevice(data: Device) {
        try {
            const docRef = await addDoc(collection(db, "device"), data);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
}