# Postgresql

- Install packages:

```bash
npm i @nestjs/typeorm typeorm pg
```

- Create the `database.config.ts` file:

```ts
export default registerAs('DATABASE_CONFIG', () => {
  return {
    env: process.env.APP_ENV || 'development',
    postgres: {
      url: process.env.POSTGRES_URL,
      database: process.env.POSTGRES_DB_NAME
    }
  };
});
```

- Create the `config-database.ts` file:

```ts
export const createPostgresqlConfig = (dbConfig: ConfigType<typeof databaseConfig>): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: dbConfig.postgres.url,
  database: dbConfig.postgres.database,
  synchronize: dbConfig.env === 'development',
  autoLoadEntities: true,
  logging: true
});
```

- Create the `postgresql.module.ts` file:

```ts
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [databaseConfig.KEY],
      useFactory: createPostgresqlConfig
    })
  ]
})
export class PostgreSQLModule implements OnModuleInit {
  constructor(
    @Inject(databaseConfig.KEY)
    private readonly dbConfig: ConfigType<typeof databaseConfig>,
    private readonly dataSource: DataSource
  ) {}

  onModuleInit() {
    if (this.dataSource.isInitialized) {
      const { url, database } = this.dbConfig.postgres;
      console.log(`[database] (postgresql) connected to "${database}" at ${url}`);
    }
  }
}
```

- Import the `PostgreSQLModule` into the root `AppModule`:

```ts
@Module({
  imports: [PostgreSQLModule]
})
export class AppModule {}
```

---

### References

- [[Guide] TypeORM | NestJS](https://docs.nestjs.com/techniques/database)
- [[NPM] TypeORM](https://www.npmjs.com/package/typeorm)
