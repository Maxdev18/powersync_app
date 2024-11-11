import { db } from "@/firebaseConfig";
import { Response } from "@/Types/Reponse";
import { doc } from "firebase/firestore";

export class DeviceService {
  static async getDay() {
    try {

    } catch(e) {
      console.error("Error getting day: ", e);

      return returnError("Error getting day")
    }
  }

  static async updateDay() {
    try {

    } catch(e) {
      console.error("Error updating day: ", e);

      return returnError("Error updating day")
    }
  }
}

async function queryDeviceRef(id: string) {
  return doc(db, "device", id)
}

function returnError(message: string): Response {
  return { message, isError: true }
}