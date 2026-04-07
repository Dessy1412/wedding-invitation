import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

// tambah RSVP
export const addRSVP = async (data) => {
  return await addDoc(collection(db, "rsvp"), {
    ...data,
    createdAt: serverTimestamp(),
  });
};

// ambil semua RSVP (sekali fetch)
export const getRSVP = async () => {
  const snapshot = await getDocs(collection(db, "rsvp"));
  return snapshot.docs.map((doc) => doc.data());
};

// realtime RSVP
export const listenRSVP = (callback) => {
  const q = query(collection(db, "rsvp"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((doc) => doc.data());
    callback(data);
  });
};
