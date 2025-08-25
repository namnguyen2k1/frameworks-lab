import cors from 'cors';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectSQLite } from './database/sqlite.config';
import { postRoutes } from './post/post.routes';

async function bootstrap() {
  const app = express();
  const PORT = 3000;

  // middlewares
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());

  // database
  const sqliteDB = await connectSQLite();

  // post resources
  app.use('/posts', postRoutes(sqliteDB));

  // 404 handler
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      status: 404,
      message: 'Resource Not Found'
    });
  });

  // catch all errors
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    const { status = 500, message = 'Internal Server Error' } = err;
    res.status(status).json({ status, message });
  });

  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
}

bootstrap();
