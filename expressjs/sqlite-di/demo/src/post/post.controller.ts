import { Request, Response } from 'express';
import { PostService } from './post.service';

export class PostController {
  constructor(private readonly postService: PostService) {}

  getAll = async (req: Request, res: Response) => {
    const result = await this.postService.getAllPost();
    res.status(200).json({
      status: 200,
      message: 'Get list posts successfully',
      data: result
    });
  };

  getById = async (req: Request, res: Response) => {
    const result = await this.postService.getPostById(Number(req.params.id));
    res.status(200).json({
      status: 200,
      message: 'Get post successfully',
      data: result
    });
  };

  create = async (req: Request, res: Response) => {
    const result = await this.postService.createPost(req.body);
    res.status(201).json({
      status: 201,
      message: 'Create post successfully',
      data: result
    });
  };

  update = async (req: Request, res: Response) => {
    const result = await this.postService.updatePost(Number(req.params.id), req.body);
    res.status(200).json({
      status: 200,
      message: 'Update post successfully',
      data: result
    });
  };

  delete = async (req: Request, res: Response) => {
    await this.postService.deletePost(Number(req.params.id));
    res.status(200).json({
      status: 200,
      message: 'Delete post successfully'
    });
  };
}
