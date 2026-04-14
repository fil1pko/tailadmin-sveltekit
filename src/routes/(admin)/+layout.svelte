<script lang="ts">
	import AppHeader from "$components/layout/AppHeader.svelte";
	import AppSidebar from "$components/layout/AppSidebar.svelte";
	import Backdrop from "$components/layout/Backdrop.svelte";
	
	import { sidebarContext } from "$lib/context/sidebar.svelte";

	let { children } = $props();

	let mainContentMargin = $derived(
		sidebarContext.isMobileOpen
			? "ml-0"
			: sidebarContext.effectiveIsExpanded || sidebarContext.isHovered
			? "lg:ml-[290px]"
			: "lg:ml-[90px]"
	);
</script>

<div class="min-h-screen xl:flex">
	<AppSidebar />
	<Backdrop />

	<div class="flex-1 transition-all duration-300 ease-in-out {mainContentMargin}">
		<AppHeader />

		<main class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
			{@render children()}
		</main>
	</div>
</div>