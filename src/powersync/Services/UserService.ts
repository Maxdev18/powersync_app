import { collection, addDoc, query, where, getDocs, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { User } from "@/Types/User";
import { Response } from "@/Types/Reponse";
import { storeData, getData, updateKey } from "@/storage/storage";
import { GroupService } from "./GroupService";
import { DeviceService } from "./DeviceService";

export class UserService {
  static async createUser(user: User): Promise<Response> {
    try {
      const collectionRef = collection(db, "user");
      const userDocQuery = query(collectionRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(userDocQuery);

      if (querySnapshot.empty) {
        const docRef = await addDoc(collection(db, "user"), user);
        const userDoc = await getDoc(docRef);
        const userId = userDoc.id;
        const userData = userDoc.data();

        const response: Response = {
          message: "Registered successfully",
          data: { ...userData, id: userId, password: undefined },
          isError: false,
        };

        await storeData("user", { ...userData, id: userId, password: undefined });

        return response;
      } else {
        return { message: "Email already exists", isError: true };
      }
    } catch (e) {
      console.error("Error creating user: ", e);
      return { message: "Error creating user", isError: true };
    }
  }

  static async loginUser(user: User): Promise<Response> {
    try {
      const collectionRef = collection(db, "user");
      const userDocQuery = query(collectionRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(userDocQuery);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userId = userDoc.id;
        const userData = userDoc.data();

        if (user.password !== userData.password) {
          return { message: "Incorrect email or password", isError: true };
        } else {
          await storeData("user", { ...userData, id: userId, password: undefined });
          await GroupService.getGroupsByUserFromStorage();
          await DeviceService.getDevicesByGroupIds();

          return {
            message: "Authenticated",
            data: { ...userData, id: userId, password: undefined },
            isError: false,
          };
        }
      } else {
        return { message: "Incorrect email or password", isError: true };
      }
    } catch (e) {
      console.error("Error logging in user: ", e);
      return { message: "Error logging in", isError: true };
    }
  }

  static async updateUser(user: User): Promise<Response> {
    try {
      const collectionRef = collection(db, "user");
      const docRef = doc(db, "user", user.id as string);
      const userDocQuery = query(collectionRef, where("id", "==", user.id));
      const querySnapshot = await getDocs(userDocQuery);

      if (!querySnapshot.empty) {
        await updateDoc(docRef, user);
        await updateKey("user", { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id });

        return { message: "Updated profile", isError: false };
      } else {
        return { message: "User doesn't exist", isError: true };
      }
    } catch (e) {
      console.log("Error updating user", e);
      return { message: "Error updating user", isError: true };
    }
  }

  static async getUserID(): Promise<Response> {
    try {
      // Retrieve the stored user data
      const storedUser = await getData("user");

      // Check if we have a valid user ID
      if (storedUser && storedUser.id) {
        return {
          message: "User ID found",
          data: { userId: storedUser.id },
          isError: false,
        };
      } else {
        return { message: "User not found", isError: true };
      }
    } catch (e) {
      console.error("Error fetching user ID: ", e);
      return { message: "Error fetching user ID", isError: true };
    }
  }
}
