import { pgTable, serial, text } from 'drizzle-orm/pg-core';
export const articlesTbl = pgTable('articles', {
	id: serial('id').primaryKey(),
	title: text('title'),
	content: text('content')
});
