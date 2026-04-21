import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import type { User } from "../types";

export const subscribeToUsers = (
  callback: (users: User[]) => void
) => {
  const colRef = collection(db, "users");

  console.log("Setting up Firestore listener for users collection...", colRef);

  return onSnapshot(colRef, (snapshot) => {
    const users: User[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<User, "id">),
    }));

    console.log("Received users data from Firestore : ", users);

    callback(users);
  });
};