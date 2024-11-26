import { neon } from '@neondatabase/serverless';
//q11const VITE_NEONDB_CONNECTION_SRING = 'postgresql://neondb_owner:5NkQ0URPKpTC@ep-royal-water-a2kl6zpz.eu-central-1.aws.neon.tech/neondb?sslmode=requir
const db = neon(import.meta.env.VITE_NEONDB_CONNECTION_STRING!)

export default db
