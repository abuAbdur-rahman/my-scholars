import { Client, Storage } from 'appwrite';

const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)  // Appwrite API endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);  // Project ID from .env

const storage = new Storage(client);

export { client, storage };
