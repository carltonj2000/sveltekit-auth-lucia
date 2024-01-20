import { sql } from '@vercel/postgres';
import * as dotenv from 'dotenv';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import type { ArticleT } from '../routes/article';
import { articlesTbl } from './schema/articles';
dotenv.config();
export const db = drizzle(sql);

export const getArticles = async () => {
	const articles = await db.select().from(articlesTbl);
	return articles;
};

export const getArticle = async (id: string) => {
	const article = await db
		.select()
		.from(articlesTbl)
		.where(eq(articlesTbl.id, id));
	return article[0];
};

export const addArticle = async (article: ArticleT) => {
	const articles = await db.insert(articlesTbl).values(article).returning();
	return articles;
};

export const deleteArticle = async (id: string) => {
	const articles = await db
		.delete(articlesTbl)
		.where(eq(articlesTbl.id, id))
		.execute();
	return articles;
};

export const updateArticle = async (id: string, article: ArticleT) => {
	const articleRead = await db
		.update(articlesTbl)
		.set(article)
		.where(eq(articlesTbl.id, id));
	return articleRead;
};
