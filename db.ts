// db.js
import mysql from 'mysql';

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'vertik03.mysql.tools',
  user: 'vertik03_default',
  password: '26T3+#buuZ',
  database: 'vertik03_default',
});

// Create a wrapper function to execute queries
export function query(sql: string, params: any) {
  return new Promise<any>((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) {
        return reject(error);
      }

      return resolve(results);
    });
  });
}