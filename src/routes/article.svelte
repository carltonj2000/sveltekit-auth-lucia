<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	export let id = 1;
	export let title = 'Example Article';
	export let content =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis optio ullam necessitatibus quasi nam pariatur unde voluptates quis facere beatae totam debitis itaque nihil qui porro, sit a sint praesentium?';
</script>

<Card.Root>
	<Card.Header><Card.Title>{title}</Card.Title></Card.Header>
	<Card.Content><p>{content}</p></Card.Content>
	<Card.Footer class="flex justify-between">
		<form action="?/deleteArticle&id={id}" method="POST" use:enhance>
			<Button variant="destructive" type="submit">Delete</Button>
		</form>
		<a href={`/edit/${id}`}>
			<Button variant="secondary">Edit</Button>
		</a>
	</Card.Footer>
</Card.Root>
