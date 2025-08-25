import { Database } from 'better-sqlite3';
import express, { Router } from 'express';
import { PostController } from './post.controller';
import { PostRepository } from './post.repository';
import { PostService } from './post.service';

export function postRoutes(db: Database): Router {
  const router = express.Router();
  const postRepo = new PostRepository(db);
  const postService = new PostService(postRepo);
  const postController = new PostController(postService);

  router.get('/', postController.getAll);
  router.get('/:id', postController.getById);
  router.post('/', postController.create);
  router.patch('/:id', postController.update);
  router.delete('/:id', postController.delete);

  return router;
}
