import { superValidate } from 'sveltekit-superforms/server';
import { articleInsertZ } from '../../db/schema/articles';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const form = await superValidate(articleInsertZ);
	return { form };
};

export const actions: Actions = {
	addArticle: async (e) => {
		const form = await superValidate(e, articleInsertZ);
		console.log({ addArticle: true, form });
		return { form };
	}
};
