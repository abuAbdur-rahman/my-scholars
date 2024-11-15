import { Neon } from '@neondatabase/serverless';

const neon = new Neon({
  connectionString: process.env.NEONDB_CONNECTION_STRING,
});

export default neon
