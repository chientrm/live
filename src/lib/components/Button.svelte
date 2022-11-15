<script lang="ts">
	export let value: string;
	export let variant: 'primary' | 'secondary' = 'primary';
</script>

<input
	type="button"
	{value}
	class:primary={variant === 'primary'}
	class:secondary={variant === 'secondary'}
/>

<style>
	.primary {
		color: red;
	}
	.secondary {
		color: blue;
	}
</style>
