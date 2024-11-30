import { openDB } from "idb";

export const initDB = async () => {
  return await openDB("historyDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("historyStore")) {
        db.createObjectStore("historyStore", { autoIncrement: true });
      }
    },
  });
};

export const saveHistory = async (historyData: {
  id: string;
  data: Lecture;
}) => {
  const db = await initDB();
  await db.add("historyStore", historyData);
};

export const getHistory = async (): Promise<Lecture[]> => {
  const db = await initDB();
  return await db.getAll("historyStore");
};
