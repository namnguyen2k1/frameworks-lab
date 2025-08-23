### MongoDB with Mongoose (NestJs)

- Install packages:

```bash
npm i @nestjs/mongoose mongoose
```

- Create the `database.config.ts` file:

```ts
export default registerAs('DATABASE_CONFIG', () => {
  return {
    env: process.env.APP_ENV || 'development',
    mongo: {
      url: process.env.MONGO_URL,
      database: process.env.MONGO_DB_NAME
    }
  };
});
```

- Create the `config-database.ts` file:

```ts
export const createMongoDbConfig = (dbConfig: ConfigType<typeof databaseConfig>): MongooseModuleFactoryOptions => ({
  uri: dbConfig.mongo.url,
  connectionFactory: async (conn: Connection) => {
    if (conn.readyState === ConnectionStates.connected) {
      const { url, database } = dbConfig.mongo;
      console.log(`[database] (mongodb) connected to "${database}" at ${url}`);
    }
    return conn;
  }
});
```

- Create the `mongodb.module.ts` file:

```ts
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [databaseConfig.KEY],
      useFactory: createMongoDbConfig,
      connectionName: 'DATABASE_NAME'
    })
  ]
})
export class MongoDBModule implements OnModuleInit {
  onModuleInit() {
    mongoose.set('runValidators', true);
    mongoose.set('strictQuery', true);
    mongoose.set('debug', true);
  }
}
```

- Import the `MongoDBModule` into the root `AppModule`:

```ts
@Module({
  imports: [MongoDBModule]
})
export class AppModule {}
```

---

### References

- [[Guide] MongoDB | NestJS](https://docs.nestjs.com/techniques/mongodb)
- [[NPM] Mongoose](https://www.npmjs.com/package/mongoose)
