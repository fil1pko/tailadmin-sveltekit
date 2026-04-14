<script lang="ts">
	import '@fontsource-variable/outfit';
	import './app.css';
	import "flatpickr/dist/flatpickr.css";
	import favicon from '$lib/assets/favicon.svg';

	import { themeState } from '$lib/context/theme.svelte';

	let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class=" {themeState.current === 'dark' ? 'dark' : ''}">
	<div class="bg-white dark:bg-gray-900 min-h-screen">
		{@render children()}
	</div>
</div>

