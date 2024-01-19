import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { newArticleSchema } from './article';

export const load = async (e) => {
	const form = await superValidate(e, newArticleSchema);
	return { form };
};

export const actions = {
	default: async (e) => {
		const form = await superValidate(e, newArticleSchema);
		console.log('adding to do (server in)', form);
		if (!form.valid) {
			return fail(400, { form });
		}
		return { form };
	}
};
