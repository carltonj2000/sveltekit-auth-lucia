import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
dotenv.config();
const { POSTGRES_URL } = process.env;
if (!POSTGRES_URL) {
	throw new Error('No db url => POSTGRES_URL');
}

export default {
	schema: './src/db/schema/*',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.POSTGRES_URL + '?sslmode=require'
	}
} satisfies Config;
