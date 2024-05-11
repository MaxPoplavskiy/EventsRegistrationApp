import { Pool } from 'pg';
import 'dotenv/config'

import * as fs from 'fs';

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

const sql = fs.readFileSync('./scripts/seed.sql').toString();

pool.query(sql)
  .then(() => {
    console.log('SQL script executed successfully');
    pool.end(); // Close the pool
  })
  .catch((err) => {
    console.error('Error executing SQL script:', err);
    pool.end(); // Close the pool
  });