import db from '../../db-config/neondb.config'


export const fetchLectures = async (): Promise<Lectures | undefined > => {
  try {
    const lectures  = await db('SELECT * FROM lectures')
    console.log(lectures)
    return lectures 
  } catch (error) {
    console.log('Unable to fetch the data, server error :', error)
  }
}


