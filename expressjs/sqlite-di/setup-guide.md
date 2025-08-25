## Setup Express + SQLite

- Create project folder:

```bash
mkdir sqlite-di
cd sqlite-di
```

- Init project:

```bash
npm init -y
```

- Install dependencies:

```bash
npm install express morgan cors helmet better-sqlite3
npm install --save-dev nodemon typescript ts-node @types/node @types/express @types/morgan @types/cors @types/better-sqlite3
```

- Init TypeScript config:

```bash
npx tsc --init
```

- Edit **`tsconfig.json`** (minimal setup):

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```
