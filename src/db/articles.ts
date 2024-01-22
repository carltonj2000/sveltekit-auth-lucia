import { eq } from 'drizzle-orm';
import { articleDb as db } from './index';
import { articlesTbl, type ArticleInsertT } from './schema/articles';

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

export const addArticle = async (article: ArticleInsertT) => {
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

export const updateArticle = async (id: string, article: ArticleInsertT) => {
	const articleRead = await db
		.update(articlesTbl)
		.set(article)
		.where(eq(articlesTbl.id, id));
	return articleRead;
};
