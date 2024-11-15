import neon from '../../db-config/neondb.config.js'

const fetchLectures = async () => { 
  try { 
    const { rows } = await neon.query('SELECT * FROM lectures');} 
    
    console.log(rows); // Logs the rows fetched from the "lectures" table
  } catch (error) {
    console.error('Error querying NeonDB:', error);
  }

  return rows  
}

