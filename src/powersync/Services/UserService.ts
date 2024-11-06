import { collection, addDoc, query, where } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { User } from "@/Types/User";
import { Response } from "@/Types/Reponse";

export class UserService {
  static async createUser(user: User): Promise<void | Response> {
    try {
      const collectionRef = collection(db, "user")
      const userDoc = query(collectionRef, where('email', '==', user.email))

      console.log(userDoc)
      if(!userDoc) {
        const docRef = await addDoc(collection(db, "user"), user);
        console.log("User created with ID: ", docRef.id);
      } else {
        const response: Response = {
          message: "Email already exists",
          isError: true
        }
        
        return response
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async loginUser(user: User) {
    try {

    } catch(e) {

    }
  }

  async updateUser(user: User) {

  }
}