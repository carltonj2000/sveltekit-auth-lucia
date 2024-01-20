<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { superForm } from 'sveltekit-superforms/client';
	import { newArticleSchema } from './article';

	export let data;
	const { form, errors, enhance, constraints } = superForm(data.form, {
		taintedMessage: 'Are you sure you want to leave?',
		validators: newArticleSchema
	});
</script>

<div class="flex-1">
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">New Article</h3>
	<Card.Root>
		<form action="?/addArticle" method="POST" use:enhance>
			<Card.Header>
				<Card.Title>
					<Label for="title">Title:</Label>
					<Input type="text" id="title" name="title" bind:value={$form.title} />
					{#if $errors.title}
						<small class="text-sm font-medium leading-none">
							{$errors.title}
						</small>
					{/if}
				</Card.Title>
			</Card.Header>
			<Card.Content>
				<Label for="content">Content:</Label>
				<Textarea id="content" name="content" bind:value={$form.content} />
				{#if $errors.content}
					<small class="text-sm font-medium leading-none">
						{$errors.content}
					</small>
				{/if}
			</Card.Content>
			<Card.Footer>
				<Button variant="secondary" class="w-full" type="submit">
					Add Article
				</Button>
			</Card.Footer>
		</form>
	</Card.Root>
</div>
