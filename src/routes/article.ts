import { z } from 'zod';

export type ArticleT = {
	title: string;
	content: string;
};

export const newArticleSchema = z.object({
	title: z.string().min(1),
	content: z.string().min(1)
});
