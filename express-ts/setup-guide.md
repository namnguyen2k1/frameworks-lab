## Setup Node.js Project with Express + TypeScript

- Create project folder:

```bash
mkdir project-node-setup
cd project-node-setup
```

- Init project:

```bash
npm init -y
```

- Install dependencies:

```bash
npm install express morgan cors helmet
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

- Create folder & file: **`src/index.ts`**

```ts
import cors from 'cors';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: 'Success'
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 404,
    message: 'Not Found'
  });
});

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: 500,
    message: 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

- Update **`package.json`**

```json
"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

- Run project (dev mode with hot reload):

```bash
npm run dev
```

- Build & run (production mode):

```bash
npm run build
npm start
```

- Open [http://localhost:3000](http://localhost:3000) → you will see:

```json
{ "status": 200, "message": "Success" }
```
