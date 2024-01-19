import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { newArticleSchema } from '../../article';

export const load = async (e) => {
	const form = await superValidate(e, newArticleSchema);
	console.log('ran', form);
	return { form };
};

export const actions = {
	default: async (e) => {
		const form = await superValidate(e, newArticleSchema);
		console.log('updating (server in)', form);
		if (!form.valid) {
			return fail(400, { form });
		}
		return { form };
	}
};
