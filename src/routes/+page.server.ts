import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { addArticle, deleteArticle, getArticles } from '../db/articles';
import { articleInsertZ } from '../db/schema/articles';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const articles = await getArticles();
	const form = await superValidate(articleInsertZ);
	return { form, articles };
};

export const actions: Actions = {
	addArticle: async (e) => {
		const form = await superValidate(e, articleInsertZ);
		if (!form.valid) return fail(400, { form });
		await addArticle({ ...form.data });
		return;
	},
	deleteArticle: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (id) await deleteArticle(id);
		else return fail(400, { message: 'article to delete not found' });
	}
};
