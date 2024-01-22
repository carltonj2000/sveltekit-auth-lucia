// from https://lucia-auth.com/guidebook/drizzle-orm/

import { bigint, pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const userTbl = pgTable('auth_user', {
	id: varchar('id', { length: 15 }).primaryKey(),
	name: text('name'),
	username: text('username').unique()
});

export const sessionTbl = pgTable('user_session', {
	id: varchar('id', { length: 128 }).primaryKey(),
	activeExpires: bigint('active_expires', { mode: 'number' }).notNull(),
	idleExpires: bigint('idle_expires', { mode: 'number' }).notNull(),
	userId: varchar('user_id', { length: 15 })
		.notNull()
		.references(() => userTbl.id)
});

export const keyTbl = pgTable('user_key', {
	id: varchar('id', { length: 255 }).primaryKey(),
	hashedPassword: varchar('hashed_password', { length: 255 }),
	userId: varchar('user_id', { length: 15 })
		.notNull()
		.references(() => userTbl.id)
});
