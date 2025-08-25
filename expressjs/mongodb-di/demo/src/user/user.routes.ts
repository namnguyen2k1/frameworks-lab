import express from 'express';
import { Db } from 'mongodb';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { validateUserCreateBody } from './validation/create-user-body.validation';
import { isObjectId } from './validation/is-object-id';
import { validateUserUpdateBody } from './validation/update-user-body.validation';

export function userRoutes(db: Db) {
  const router = express.Router();
  const userRepo = new UserRepository(db);
  const userService = new UserService(userRepo);
  const userController = new UserController(userService);

  router.get('/', userController.getUsers);
  router.get('/:id', isObjectId, userController.getUser);
  router.post('/', validateUserCreateBody, userController.createUser);
  router.patch('/:id', isObjectId, validateUserUpdateBody, userController.updateUser);
  router.delete('/:id', isObjectId, userController.deleteUser);

  return router;
}
