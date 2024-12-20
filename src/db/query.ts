import db from "../../db-config/neondb.config";

//Querying New Data
export const queryNew = (): Promise<Lectures> => {
  const data = db(`SELECT * FROM lectures ORDER BY date_uploaded DESC LIMIT 10`);

  return data;
};
/* export const queryNewOne = (): Promise<Lecture> => {
  console.log('Hi')
  const data = db(`SELECT * FROM lectures ORDER BY date_uploaded DESC LIMIT 1`);
  return data[0]
}*/

//Query LatestLecture
export const queryLatestLecture = async (): Promise<Lecture> => {
  const [latestLecture] = await db(`
    SELECT * FROM lectures
    ORDER BY date_uploaded DESC
    LIMIT 1
  `);
  /* @ts-expect-error Lecture */
  return latestLecture;
};


//Query Using Category
export const queryByCategory = (category: string): Promise<Lectures> => {
  const data = db(`SELECT * FROM lectures WHERE category = '${category}'`);

  return data
};

//Query Using Lecturer Name
export const queryByName = (name: string): Promise<Lectures> => {
  const data = db(`SELECT * FROM lectures WHERE lecturer_name = '${name}'`);
  return data;
};

//Query from search
export const queryById = async (id: string ): Promise<Lecture> => {
  console.log(id)
  const data = await db(`SELECT * FROM lectures WHERE id = '${id}'`)

  {/* @ts-expect-error Lecture */ }
  return data[0];
};

//Query Short Lectures
export const queryShortLectures = (): Promise<Lectures> => {
  const data = db(`SELECT * FROM lectures WHERE duration < '00:10:01' `);

  return data;
};

//Query by tags
export const queryByTag = (tag: string): Promise<Lectures> => {
  const data = db(`SELECT COUNT(*) FROM lectures WHERE tags LIKE '${tag}'`);

  return data;
};

// Qurry by Search

export const querySearch = (param: string): Promise<Lectures> => {
  const data = db(`
            SELECT *
            FROM lectures
            WHERE lecturer_name ILIKE '${param}'
            OR lecture_title ILIKE '${param}'
            OR tags ILIKE '${param}'
            OR description ILIKE '${param}'
            OR category ILIKE '${param}'
            ORDER BY date_uploaded DESC
        `);
  
  return data;
};

export const queryAllCategories = () => {
    const data = db(` 
        SELECT 
        category,
        GROUP_CONCAT(lecture_name) AS lectures
        FROM lectures_table
        GROUP BY category
        `)
    return data
}