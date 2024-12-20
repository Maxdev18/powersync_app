import { collection, addDoc, getDocs, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig'; // Assuming firebaseConfig is set up properly
import { Group } from "@/Types/Group";
import { Response } from "@/Types/Reponse";
import { getData, storeData } from "@/storage/storage";

export class GroupService {
  
  // Add a new group to the Firestore
  static async createGroup(group: Group): Promise<Response> {
    try {
      const docRef = await addDoc(collection(db, "group"), group);
      const groupId = docRef.id;

      await this.getGroupsByUserFromStorage();

      return {
        message: "Group created successfully",
        data: { ...group, id: groupId },
        isError: false,
      };
    } catch (error) {
      console.error("Error creating group: ", error);

      return {
        message: "Error creating group",
        isError: true,
      };
    }
  }

  // Fetch groups for a specific user from Firestore
  static async getGroupsByUserFromStorage(): Promise<Response> {
    try {
      // Retrieve stored user data to get the userId
      const storedUser = await getData("user");

      // Check if userId exists in the stored user data
      if (!storedUser || !storedUser.id) {
        return {
          message: "User ID not found in storage",
          isError: true,
        };
      }

      const userId = storedUser.id;

      // Query Firestore 'group' collection where userId matches the retrieved userId
      const groupsQuery = query(collection(db, "group"), where("userId", "==", userId));
      const querySnapshot = await getDocs(groupsQuery);

      // Map over querySnapshot to extract data and document ID for each group
      const groups = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Store the groups in local storage
      await storeData("groups", groups);

      return {
        message: "Groups fetched successfully",
        data: groups,
        isError: false,
      };
    } catch (error) {
      console.error("Error fetching groups: ", error);

      return {
        message: "Error fetching groups",
        isError: true,
      };
    }
  }

  // Delete a group from Firestore
  static async deleteGroup(groupId: string): Promise<Response> {
    try {
      await deleteDoc(doc(db, "group", groupId));

      return {
        message: "Group deleted successfully",
        isError: false,
      };
    } catch (error) {
      console.error("Error deleting group: ", error);

      return {
        message: "Error deleting group",
        isError: true,
      };
    }
  }

  // Update a group's name in Firestore
  static async updateGroupName(groupId: string, newName: string): Promise<Response> {
    try {
      const groupRef = doc(db, "group", groupId);
      await updateDoc(groupRef, { name: newName });

      return {
        message: "Group name updated successfully",
        isError: false,
      };
    } catch (error) {
      console.error("Error updating group name: ", error);

      return {
        message: "Error updating group name",
        isError: true,
      };
    }
  }

  // Check if a group has any devices
  static async hasDevices(groupId: string): Promise<Response> {
    try {
      const devicesQuery = query(collection(db, "devices"), where("groupID", "==", groupId));
      const querySnapshot = await getDocs(devicesQuery);

      const hasDevices = !querySnapshot.empty;

      return {
        message: hasDevices ? "Group has devices" : "Group has no devices",
        data: hasDevices,
        isError: false,
      };
    } catch (error) {
      console.error("Error checking devices in group: ", error);

      return {
        message: "Error checking devices in group",
        isError: true,
      };
    }
  }
}