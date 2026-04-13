<script lang="ts">
     import type { Snippet } from 'svelte';

     interface Props {
          tag?: "a" | "button";
          href?: string;
          onclick?: () => void; 
          onItemClick?: () => void;
          baseClassName?: string;
          className?: string;
          children: Snippet;
     }

     let {
          tag = "button",
          href,
          onclick,
          onItemClick,
          baseClassName = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
          className = "",
          children,
     }: Props = $props();


     let combinedClasses = $derived(`${baseClassName} ${className}`.trim());

     function handleClick(event: MouseEvent) {
          if (tag === "button") {
               event.preventDefault();
          }
               
          if (onclick) onclick();
          if (onItemClick) onItemClick();
     }
</script>

{#if tag === "a" && href}
     <a 
          {href} 
          class={combinedClasses} 
          onclick={handleClick}
     >
          {@render children()}
     </a>
{:else}
     <button 
          type="button"
          class={combinedClasses} 
          onclick={handleClick}
     >
          {@render children()}
     </button>
{/if}