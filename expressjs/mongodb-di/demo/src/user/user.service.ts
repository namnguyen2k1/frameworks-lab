import { CreateUserData } from './dto/create-user.dto';
import { UpdateUserData } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async checkExistedUser(userId: string) {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      const error: any = new Error('User not found');
      error.status = 404;
      throw error;
    }
    return user;
  }

  async findAllUsers() {
    return await this.userRepo.findAll();
  }

  async findUserById(userId: string) {
    const user = await this.checkExistedUser(userId);
    return user;
  }

  async createUser(data: CreateUserData) {
    return await this.userRepo.create(data);
  }

  async updateUser(userId: string, data: UpdateUserData) {
    await this.checkExistedUser(userId);
    return await this.userRepo.update(userId, data);
  }

  async deleteUser(userId: string) {
    await this.checkExistedUser(userId);
    return await this.userRepo.delete(userId);
  }
}
