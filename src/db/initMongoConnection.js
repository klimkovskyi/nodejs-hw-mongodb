import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import { MONGO_DB_VARS } from '../constants/constants.js';

export const initMongoDB = async () => {
  try {
    const user = env(MONGO_DB_VARS.MONGODB_USER);
    const password = env(MONGO_DB_VARS.MONGODB_PASSWORD);
    const url = env(MONGO_DB_VARS.MONGODB_URL);
    const db = env(MONGO_DB_VARS.MONGODB_DB);

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
    );

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('error connection to MongoDB', error);
    throw error;
  }
};
