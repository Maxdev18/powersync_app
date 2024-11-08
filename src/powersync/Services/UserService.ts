import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { User } from "@/Types/User";
import { Response } from "@/Types/Reponse";

export class UserService {
  static async createUser(user: User): Promise<void | Response> {
    try {
      const collectionRef = collection(db, "user")
      const userDocQuery = query(collectionRef, where('email', '==', user.email))
      const querySnapshot = await getDocs(userDocQuery)

      if(querySnapshot.empty) {
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

  static async loginUser(user: User): Promise<void | Response> {
    try {
      const collectionRef = collection(db, "user")
      const userDocQuery = query(collectionRef, where('email', '==', user.email))
      const querySnapshot = await getDocs(userDocQuery)

      if(!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data()

        if(user.password !== userData.password) {
          const response: Response = {
            message: "Incorrect email or password",
            isError: true
          }

          return response
        }

        console.log("User login successful")
      } else {
        const response: Response = {
          message: "Incorrect email or password",
          isError: true
        }

        return response
      }
    } catch(e) {
      console.error("Error logging in user: ", e);
      return;
    }
  }

  async updateUser(user: User) {

  }
}