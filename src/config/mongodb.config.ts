import { registerAs } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export default registerAs(
  'mongoDBConfig',
  (): MongooseModuleFactoryOptions => ({
    uri: process.env.MONGODB_URI,
    // user: process.env.MONGODB_USER,
    // pass: process.env.MONGODB_PASSWORD,
  }),
);
