<script lang="ts">
	import type { ArticleT } from './article';
	import Article from './article.svelte';

	export let articles: Array<ArticleT & { id: number }> = [];
	export let showDefaultOnly = false;
</script>

<div class="flex-1 flex flex-col gap-1">
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Articles</h3>
	{#if showDefaultOnly}
		<Article />
	{:else}
		{#each articles as article}
			<Article {...article} />
		{/each}
	{/if}
</div>
