import 'dotenv/config';

const config = {
  port: process.env.PORT || 5000,
  db: {
    username: process.env.MONGODB_USERNAME || '',
    password: process.env.MONGODB_PASSWORD || '',
    url: process.env.MONGODB_URL || 'localhost:27017',
    name: process.env.MONGODB_TABLE_NAME || 'backlog',
  },
  apiVersion: 'v1',
};

export default config;
