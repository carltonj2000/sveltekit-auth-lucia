import { pg } from '@lucia-auth/adapter-postgresql';
import { db, sql } from '@vercel/postgres';
import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
dotenv.config();

export const articleDb = drizzle(sql);

// from https://lucia-auth.com/guidebook/vercel-postgres/

export const authDb = lucia({
	adapter: pg(db, {
		user: 'auth_user',
		key: 'user_key',
		session: 'user_session'
	}),
	middleware: sveltekit(),
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export type AuthDbT = typeof authDb;
