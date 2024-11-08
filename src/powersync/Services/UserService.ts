import { collection, addDoc, query, where, getDocs, getDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { User } from "@/Types/User";
import { Response } from "@/Types/Reponse";

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
          isError: true
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
            isError: true
          }

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
      const userDocQuery = query(collectionRef, where('id', '==', user.id))
      const querySnapshot = await getDocs(userDocQuery)

      if(!querySnapshot.empty) {
        const response: Response = {
          message: "Updated profile",
          isError: false
        }

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
}