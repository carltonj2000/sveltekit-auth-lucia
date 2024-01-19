<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let form;
</script>

<div class="flex-1">
	<SuperDebug data={$form} />
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">New Article</h3>
	<Card.Root>
		<form method="POST">
			<Card.Header>
				<Card.Title>
					<Label for="title">Title:</Label>
					<Input type="text" id="title" name="title" bind:value={$form.title} />
				</Card.Title>
			</Card.Header>
			<Card.Content>
				<Label for="content">Content:</Label>
				<Textarea id="content" name="content" bind:value={$form.content} />
			</Card.Content>
			<Card.Footer>
				<Button variant="secondary" class="w-full" type="submit">
					Add Article
				</Button>
			</Card.Footer>
		</form>
	</Card.Root>
</div>
