import { db, FieldValue } from "@config/firebase";

export const createDocument = (filename: string, email: string) => {
  if (filename == "" || email == "") return;

  db.collection("userDocs").doc(email).collection("docs").add({
    filename,
    timestamp: FieldValue.serverTimestamp(),
  });
};
