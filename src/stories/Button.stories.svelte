<script lang="ts">
	import '../app.postcss';
	import Button from '$lib/components/Button.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta
	title="components/Button"
	component={Button}
	argTypes={{
		value: { control: 'text' },
		variant: { control: 'text' }
	}}
/>
<Template let:args>
	<Button {...args} />
</Template>
<Story name="Primary" args={{ value: 'Primary' }} />
<Story name="Secondary" args={{ value: 'Secondary', variant: 'secondary' }} />
