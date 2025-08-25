## Setup Express + MongoDB

- Create project folder:

```bash
mkdir demo-mongodb-di
cd demo-mongodb-di
```

- Init project:

```bash
npm init -y
```

- Install dependencies:

```bash
npm install express morgan cors helmet mongodb
npm install --save-dev nodemon typescript ts-node @types/node @types/express @types/morgan @types/cors
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
