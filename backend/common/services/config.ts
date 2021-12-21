import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: Number(process.env.PORT_NUMBER),
  BUCKET: process.env.STORAGE_BUCKET as string,
  DB_NAME: process.env.DB_NAME as string
};