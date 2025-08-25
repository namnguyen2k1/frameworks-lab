import Database from 'better-sqlite3';

export async function connectSQLite() {
  const db = new Database('database.sqlite', { verbose: console.log });

  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
  );
`
  ).run();

  console.log('SQLite connected');

  return db;
}
