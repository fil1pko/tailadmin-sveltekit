<script lang="ts">
     import { sidebarContext } from "$lib/context/sidebar.svelte";
     import { fade } from 'svelte/transition';

     const sidebar = sidebarContext;
</script>

{#if sidebar.isMobileOpen}
     <button
          transition:fade={{ duration: 200 }}
          class="fixed inset-0 z-40 bg-gray-900/50 lg:hidden border-none cursor-default w-full h-full p-0 m-0 outline-none"
          onclick={() => sidebar.toggleMobileSidebar()}
          aria-label="Close sidebar"
          type="button"
     ></button>
{/if}