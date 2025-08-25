import { Database, RunResult } from 'better-sqlite3';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
import { Post } from './post.model';

export class PostRepository {
  constructor(private readonly db: Database) {}

  async findAll(): Promise<Post[]> {
    const sql = 'SELECT * FROM posts';
    const stmt = this.db.prepare(sql);

    return stmt.all() as Post[];
  }

  async findById(id: number): Promise<Post | null> {
    const sql = `SELECT * FROM posts WHERE id = ?`;
    const stmt = this.db.prepare(sql);

    return stmt.get(id) as Post | null;
  }

  async create(data: CreatePostDTO): Promise<Post> {
    const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
    const stmt = this.db.prepare(sql);
    const runResult = stmt.run(data.title, data.content);

    return {
      id: runResult.lastInsertRowid as number,
      ...data
    };
  }

  async update(id: number, data: UpdatePostDTO): Promise<Post | null> {
    const sql = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
    const stmt = this.db.prepare(sql);
    stmt.run(data.title, data.content, id);

    return await this.findById(id);
  }

  async delete(id: number): Promise<RunResult> {
    const sql = 'DELETE FROM posts WHERE id = ?';
    const stmt = this.db.prepare(sql);

    return stmt.run(id);
  }
}
