import type { Handle } from '@sveltejs/kit';
import { authDb } from './db/index';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = authDb.handleRequest(event);
	return await resolve(event);
};
