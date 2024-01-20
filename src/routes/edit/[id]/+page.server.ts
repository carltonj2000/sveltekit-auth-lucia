import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { getArticle, updateArticle } from '../../../db';
import { newArticleSchema } from '../../article';

export const load = async (e) => {
	const { id } = e.params;
	const article = await getArticle(id);
	const form = await superValidate(article, newArticleSchema);
	return { form };
};

export const actions = {
	updateArticle: async (e) => {
		const form = await superValidate(e, newArticleSchema);
		if (!form.valid) {
			return fail(400, { form });
		}
		updateArticle(e.params.id, form.data);
		throw redirect(303, '/');
	}
};
