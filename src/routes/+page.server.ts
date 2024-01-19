import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const newArticleSchema = z.object({
	title: z.string().min(1).default('hi'),
	content: z.string().min(1).default('some content')
});

export const load = async () => {
	const form = await superValidate(newArticleSchema);
	console.log({ form, server: true });
	return { form };
};

export const actions = {
	default: async (e) => {
		const formData = Object.fromEntries(await e.request.formData());
		console.log('adding to do', formData);
	}
};
