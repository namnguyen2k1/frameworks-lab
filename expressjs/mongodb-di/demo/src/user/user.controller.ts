import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
  constructor(private readonly userService: UserService) {}

  getUsers = async (req: Request, res: Response) => {
    const result = await this.userService.findAllUsers();

    return res.status(200).json({
      status: 200,
      message: 'Get list users successfully',
      data: result
    });
  };

  getUser = async (req: Request, res: Response) => {
    const result = await this.userService.findUserById(req.params.id);

    return res.status(200).json({
      status: 200,
      message: 'Get user successfully',
      data: result
    });
  };

  createUser = async (req: Request, res: Response) => {
    const result = await this.userService.createUser(req.body);

    return res.status(201).json({
      status: 201,
      message: 'Create user successfully',
      data: result
    });
  };

  updateUser = async (req: Request, res: Response) => {
    const result = await this.userService.updateUser(req.params.id, req.body);

    return res.status(200).json({
      status: 200,
      message: 'Update user successfully',
      data: result
    });
  };

  deleteUser = async (req: Request, res: Response) => {
    const result = await this.userService.deleteUser(req.params.id);

    return res.status(200).json({
      status: 200,
      message: 'Delete user successfully',
      data: result
    });
  };
}
