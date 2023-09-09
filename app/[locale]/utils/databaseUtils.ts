
// import mysql, { RowDataPacket } from 'mysql2/promise';

// export async function getTranslationsFromDatabase(locale: string) {
//   const connection = await mysql.createConnection({
//     host: 'vertik03.mysql.tools',
//     user: 'vertik03_default',
//     password: '26T3+#buuZ',
//     database: 'vertik03_default'
//   });
//   console.log('Connected to database');

//   try {
//     const [translationsRows] = await connection.execute<RowDataPacket[]>(
//       'SELECT key_name, translation_text FROM translations WHERE language = ?',
//       [locale]
//     );
//     console.log(translationsRows);

//     const translations: Record<string, string> = {};
//     for (const row of translationsRows) {
//       const rowData = row as { key_name: string, translation_text: string };
//       translations[rowData.key_name] = rowData.translation_text;
//     }

//     return translations;
//   } catch (error) {
//     console.error('Error fetching translations:', error);
//     return {}; // Return an empty object or handle the error accordingly
//   } finally {
//     connection.end();
//   }
// }
import mysql, { RowDataPacket } from 'mysql2/promise';

export async function getTranslationsFromDatabase(locale: string, table: string) {
  const connection = await mysql.createConnection({
    host: 'vertik03.mysql.tools',
    user: 'vertik03_default',
    password: '26T3+#buuZ',
    database: 'vertik03_default'
  });
  // console.log('Connected to database');

  try {
    const [translationsRows] = await connection.execute<RowDataPacket[]>(
      `SELECT key_name, translation_text FROM ${table} WHERE language = ?`,
      [locale]
    );
    // console.log(translationsRows);

    const translations: Record<string, string> = {};
    for (const row of translationsRows) {
      const rowData = row as { key_name: string, translation_text: string };
      translations[rowData.key_name] = rowData.translation_text;
    }

    return translations;
  } catch (error) {
    console.error('Error fetching translations:', error);
    return {}; // Return an empty object or handle the error accordingly
  } finally {
    connection.end();
  }
}
