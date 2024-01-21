import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const articlesTbl = pgTable('articles', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content').notNull()
});

export type ArticleSelectT = InferSelectModel<typeof articlesTbl>;
export type ArticleInsertT = InferInsertModel<typeof articlesTbl>;

export const articleSelectZ = createSelectSchema(articlesTbl);
export const articleInsertZ = createInsertSchema(articlesTbl);
