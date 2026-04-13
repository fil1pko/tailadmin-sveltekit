<script lang="ts">
     import { onMount, type Snippet } from 'svelte';

     interface Props {
          isOpen: boolean;
          onClose: () => void;
          children: Snippet;
          className?: string;
     }

     let { 
          isOpen, 
          onClose, 
          children, 
          className = "" 
     }: Props = $props();

     let dropdownRef = $state<HTMLDivElement | null>(null);

     function handleClickOutside(event: MouseEvent) {
          const target = event.target as HTMLElement;
          
          if (
               isOpen &&
               dropdownRef &&
               !dropdownRef.contains(target) &&
               !target.closest('.dropdown-toggle')
          ) {
               onClose();
          }
     }

     onMount(() => {
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
          };
     });
</script>

{#if isOpen}
     <div
          bind:this={dropdownRef}
          class="absolute z-40 right-0 mt-2 rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark {className}"
     >
          {@render children()}
     </div>
{/if}