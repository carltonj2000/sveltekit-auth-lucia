<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Form } from 'formsnap';
	import { articlesTbl } from '../../db/schema/articles';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Card.Root class="mt-4 mx-2">
	<Form.Root
		form={data.form}
		schema={articlesTbl}
		let:config
		action="?/addArticle"
	>
		<Form.Field {config} name="title">
			<Card.Header>
				<Card.Title>
					<Form.Label>Title</Form.Label>
					<Form.Input />
				</Card.Title>
				<small>
					<Form.Validation />
				</small>
			</Card.Header>
		</Form.Field>
		<Form.Field {config} name="content">
			<Card.Content>
				<Form.Label>Content</Form.Label>
				<Form.Textarea />
				<small>
					<Form.Validation />
				</small>
			</Card.Content>
		</Form.Field>
		<Card.Footer>
			<Button variant="secondary" class="w-full" type="submit">
				Add Article
			</Button>
		</Card.Footer>
	</Form.Root>
</Card.Root>
