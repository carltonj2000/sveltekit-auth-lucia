<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { articlesTbl } from '../../../db/schema/articles';

	export let data;
	$: ({ form } = data);
</script>

<div class="flex-1 max-w-[960px] mx-auto mt-3">
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
		Edit Article
	</h3>
	<Card.Root>
		<Card.Content class="mt-3">
			<Form.Root
				method="POST"
				{form}
				schema={articlesTbl}
				let:config
				action="?/updateArticle"
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
</div>
