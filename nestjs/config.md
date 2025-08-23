### Config Environment (NestJs)

- Install packages:

```bash
npm i @nestjs/config
```

- create the `database.config.ts` file:

```ts
export default registerAs('DATABASE_CONFIG', () => {
  return {
    env: process.env.APP_ENV || 'development',
    mongo: {
      url: process.env.MONGO_URL,
      database: process.env.MONGO_DB_NAME
    },
    postgres: {
      url: process.env.POSTGRES_URL,
      database: process.env.POSTGRES_DB_NAME
    }
  };
});
```

- Create the `app.config.ts` file:

```ts
export default registerAs('APP_CONFIG', () => {
  return {
    env: process.env.APP_ENV || 'development',
    port: parseInt(process.env.APP_PORT || '3001', 10),
    name: process.env.APP_NAME || 'NestJS App',
    url: process.env.APP_URL || `http://localhost:${process.env.APP_PORT || 3000}`
  };
});
```

- Create the `configuration.module.ts` file:

```ts
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [databaseConfig, appConfig]
    })
  ]
})
export class ConfigurationModule {}
```

- Import the `ConfigurationModule` into the root `AppModule`:

```ts
@Module({
  imports: [ConfigurationModule]
})
export class AppModule {}
```

---

### Environments

- Example `.env` file:

```bash
APP_NAME=""
APP_ENV="development"
APP_PORT=3001
APP_URL="http://localhost:3001"

MONGO_DB_NAME=""
MONGO_URL="mongodb://***"

POSTGRES_DB_NAME=""
POSTGRES_URL="postgresql://***"
```

---

### References

- [[Guide] Configuration | NestJs ](https://docs.nestjs.com/techniques/configuration)
- [[NPM] NestJs/Config](https://www.npmjs.com/package/@nestjs/config)
