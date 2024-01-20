import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';
export const articlesTbl = pgTable('articles', {
	id: serial('id').primaryKey(),
	title: text('title'),
	content: text('content')
});

export type articleSelectT = InferSelectModel<typeof articlesTbl>;
export type articleInsertT = InferInsertModel<typeof articlesTbl>;
