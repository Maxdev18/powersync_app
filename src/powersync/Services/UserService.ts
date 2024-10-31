import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { User } from "@/Types/User";

export class UserService {
    async createUser(data: User) {
        try {
            const docRef = await addDoc(collection(db, "user"), data);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
}