<script lang="ts">
     import type { Snippet } from "svelte";
     import { twMerge } from "tailwind-merge";

     interface LabelProps {
          for?: string;
          children: Snippet;
          class?: string;
     }

     let { 
          for: htmlFor, 
          children, 
          class: className = "" 
     }: LabelProps = $props();

     const labelClasses = $derived(
          twMerge(
               "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400",
               className
          )
     );
</script>

<label
     for={htmlFor}
     class={labelClasses}
>
     {@render children()}
</label>