import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
import { PostRepository } from './post.repository';

export class PostService {
  constructor(private readonly postRepo: PostRepository) {}

  async checkExistedPost(postId: number) {
    const post = await this.postRepo.findById(postId);
    if (!post) {
      const error: any = new Error('Post not found');
      error.status = 404;
      throw error;
    }
    return post;
  }

  async getAllPost() {
    return await this.postRepo.findAll();
  }

  async getPostById(postId: number) {
    const post = await this.checkExistedPost(postId);
    return post;
  }

  async createPost(data: CreatePostDTO) {
    return await this.postRepo.create(data);
  }

  async updatePost(postId: number, data: UpdatePostDTO) {
    await this.checkExistedPost(postId);
    return await this.postRepo.update(postId, data);
  }

  async deletePost(postId: number) {
    await this.checkExistedPost(postId);
    return await this.postRepo.delete(postId);
  }
}
