import { openDB } from "idb";

type audioData = {
  id: string;
  audioBlob: Blob;
  metadata: Partial<Lecture>;
}

const dbName = "audioDownloadsDB";

export const initDB = async () => {
  return await openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("audioStore")) {
        db.createObjectStore("audioStore", { keyPath: "id" });
      }
    },
  });
};

const saveAudio = async (audioData: audioData) => {
  const db = await initDB();
  await db.put("audioStore", audioData);
};

export const downloadAudio = async (url: string, id: string, metadata: object) => {
    const response = await fetch(url);
    const audioBlob = await response.blob();

    await saveAudio({ id, audioBlob, metadata });
};

export const getAudio = async (id: string) : Promise<audioData> => {
  const db = await initDB();
  return await db.get("audioStore", id);
};

export const getAllAudios = async (): Promise<audioData[]> => {
  const db = await initDB();
  return await db.getAll("audioStore");
};