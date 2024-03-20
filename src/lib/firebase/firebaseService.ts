import { ref, get, set, push } from "firebase/database";
import { database } from "./firebase";

export const firebaseGetData = async (name: string) => {
  try {
    const headerRef = ref(database, name); // Get ref of 'data'
    // console.log(headerRef);
    const snapshot = await get(headerRef); // Get data of 'data'
    return snapshot.val();
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};
export const firebasePostData = async (name: string, data: any) => {
  try {
    const headerRef = ref(database, name); // Get ref of 'data'
    // console.log(data);
    const snapshot = await push(headerRef, data); // Get data of 'data'
    // console.log(snapshot);
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};
