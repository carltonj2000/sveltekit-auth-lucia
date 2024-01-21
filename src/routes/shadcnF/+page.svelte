<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { articlesTbl } from '../../db/schema/articles';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ form } = data);
</script>

<Card.Root class="mt-3 mx-3">
	<Card.Content>
		<Form.Root
			method="POST"
			{form}
			schema={articlesTbl}
			let:config
			action="?/addArticle"
		>
			<Form.Field {config} name="title">
				<Form.Item>
					<Form.Label>Title</Form.Label>
					<Form.Input />
					<Form.Description>Title of the article.</Form.Description>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="content">
				<Form.Item>
					<Form.Label>Content</Form.Label>
					<Form.Input />
					<Form.Description>Content of the article.</Form.Description>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Button>Submit</Form.Button>
		</Form.Root>
	</Card.Content>
</Card.Root>
