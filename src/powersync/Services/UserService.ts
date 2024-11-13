import { collection, addDoc, query, where, getDocs, getDoc, updateDoc, doc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { User } from "@/Types/User";
import { Response } from "@/Types/Reponse";
import { getData, storeData, updateKey } from "@/storage/storage";

export class UserService {
  static async createUser(user: User): Promise<Response> {
    try {
      const collectionRef = collection(db, "user")
      const userDocQuery = query(collectionRef, where('email', '==', user.email))
      const querySnapshot = await getDocs(userDocQuery)

      if(querySnapshot.empty) {
        const docRef = await addDoc(collection(db, "user"), user);
        const userDoc = await getDoc(docRef)
        const userId = userDoc.id
        const userData = userDoc.data()
        
        const response: Response = {
          message: "Registered successfully",
          data: { ...userData, id: userId, password: undefined },
          isError: false
        }

        return response
      } else {
        const response: Response = {
          message: "Email already exists",
          isError: true
        }
        
        return response
      }
    } catch (e) {
      console.error("Error creating user: ", e);
      
      const response: Response = {
        message: "Error creating user",
        isError: true
      }
      
      return response
    }
  }

  static async loginUser(user: User): Promise<Response> {
    try {
      const collectionRef = collection(db, "user")
      const userDocQuery = query(collectionRef, where('email', '==', user.email))
      const querySnapshot = await getDocs(userDocQuery)

      if(!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0]
        const userId = userDoc.id
        const userData = userDoc.data()

        if(user.password !== userData.password) {
          const response: Response = {
            message: "Incorrect email or password",
            isError: true
          }

          return response
        } else {
          const response: Response = {
            message: "Authenticated",
            data: { ...userData, id: userId, password: undefined },
            isError: false
          }

          await storeData("user", { ...userData, id: userId, password: undefined })

          return response
        }
      } else {
        const response: Response = {
          message: "Incorrect email or password",
          isError: true
        }

        return response
      }
    } catch(e) {
      console.error("Error logging in user: ", e);
      
      const response: Response = {
        message: "Error logging in",
        isError: true
      }

      return response;
    }
  }

  static async updateUser(user: User): Promise<Response> {
    try {
      const collectionRef = collection(db, "user")
      const docRef = doc(db, "user", user.id as string);
      const userDocQuery = query(collectionRef, where('id', '==', user.id))
      const querySnapshot = await getDocs(userDocQuery)

      if(!querySnapshot.empty) {
        const response: Response = {
          message: "Updated profile",
          isError: false
        }

        updateDoc(docRef, user)
        await updateKey("user", { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id })

        return response
      } else {
        const response: Response = {
          message: "User doesn't exist",
          isError: true
        }

        return response
      }
    } catch (e) {
      console.log("Error updating user", e)

      const response: Response = {
        message: "Error updating user",
        isError: true
      }

      return response
    }
  }
  
  static async getUserID(email: string): Promise<Response> {
    try {
      const collectionRef = collection(db, "user");
      const userDocQuery = query(collectionRef, where('email', '==', email));
      const querySnapshot = await getDocs(userDocQuery);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userId = userDoc.id;

        const response: Response = {
          message: "User found",
          data: { userId },
          isError: false,
        };

        return response;
      } else {
        const response: Response = {
          message: "User not found",
          isError: true,
        };

        return response;
      }
    } catch (e) {
      console.error("Error fetching user ID: ", e);

      const response: Response = {
        message: "Error fetching user ID",
        isError: true,
      };

      return response;
    }
  }
}

