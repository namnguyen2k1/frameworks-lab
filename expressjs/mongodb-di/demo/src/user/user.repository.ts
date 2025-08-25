import { Collection, Db, DeleteResult, ObjectId, WithId } from 'mongodb';
import { User } from './user.model';

export interface UserSchema extends Omit<User, 'id'> {}

export class UserRepository {
  private model: Collection<UserSchema>;

  constructor(db: Db) {
    this.model = db.collection<UserSchema>('users');
  }

  private toUser(doc: WithId<UserSchema>): User {
    return {
      id: doc._id.toHexString(),
      name: doc.name,
      email: doc.email
    };
  }

  async findAll(): Promise<User[]> {
    const docs = await this.model.find().toArray();
    return docs.map(doc => this.toUser(doc));
  }

  async findById(id: string): Promise<User | null> {
    const doc = await this.model.findOne({
      _id: new ObjectId(id)
    });
    return doc ? this.toUser(doc) : null;
  }

  async create(user: UserSchema): Promise<User> {
    const result = await this.model.insertOne(user);
    return {
      id: result.insertedId.toHexString(),
      ...user
    };
  }

  async update(id: string, user: Partial<UserSchema>): Promise<User | null> {
    const result = await this.model.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: user },
      {
        returnDocument: 'after',
        includeResultMetadata: true
      }
    );
    return result.value ? this.toUser(result.value) : null;
  }

  async delete(id: string): Promise<DeleteResult> {
    const result = await this.model.deleteOne({
      _id: new ObjectId(id)
    });
    return result;
  }
}
