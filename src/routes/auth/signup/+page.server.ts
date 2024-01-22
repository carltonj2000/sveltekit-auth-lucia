import { fail, redirect } from '@sveltejs/kit';
import { authDb as auth } from '../../../db/index';

import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		console.log('got post');
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');
		try {
			const user = await auth.createUser({
				key: {
					providerId: 'username', // auth method
					providerUserId: username.toLowerCase(), // unique id when using "username" auth method
					password // hashed by Lucia
				},
				attributes: {
					username
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
		} catch (e) {
			console.log({ e });
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
		throw redirect(302, '/');
	}
};
