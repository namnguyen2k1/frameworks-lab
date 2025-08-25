import { Db, MongoClient } from 'mongodb';

export async function connectMongoDB(): Promise<Db> {
  const url = 'mongodb://localhost:27017';
  const databaseName = 'demo-mongodb-ts';

  const client = new MongoClient(url);
  await client.connect().then(() => {
    console.log(`Database connected at: ${url}/${databaseName}`);
  });

  return client.db(databaseName);
}
