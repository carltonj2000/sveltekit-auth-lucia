<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	import ArticleNew from './article_new.svelte';
	import Articles from './articles.svelte';
	import Hero from './hero.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
	const { form } = superForm(data.form);
</script>

<div class="max-w-[960px] mx-auto mt-3">
	<Hero />
	<div class="flex gap-1 mt-5">
		<Articles showDefaultOnly={true} />
		<ArticleNew {form} />
	</div>
</div>
