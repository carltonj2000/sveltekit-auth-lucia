import { sql } from '@vercel/postgres';
import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { articlesTbl } from './schema/articles';
dotenv.config();
export const db = drizzle(sql);

export const getArticles = async () => {
	const articles = await db.select().from(articlesTbl);
	return articles;
};
