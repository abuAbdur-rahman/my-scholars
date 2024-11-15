import { Client } from 'pg';  // Using pg for connecting to NeonDB (PostgreSQL)

const client = new Client({
  user: import.meta.env.VITE_NEONDB_USER,
  host: import.meta.env.VITE_NEONDB_HOST,
  database: import.meta.env.VITE_NEONDB_DATABASE,
  password: import.meta.env.VITE_NEONDB_PASSWORD,
  port: 5432,  // Default port for PostgreSQL
});

client.connect()
  .then(() => console.log('Connected to NeonDB'))
  .catch(err => console.error('Error connecting to NeonDB:', err));

export default client;
