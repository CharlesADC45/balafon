import Database from 'better-sqlite3';
import path from 'path';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';

const sqlite = new Database(path.join(process.cwd(), 'formulaire.sqlite'));
const db = drizzle(sqlite, {schema});

export default db;