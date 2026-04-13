<script lang="ts">
     import type { Snippet } from 'svelte';

     interface Props {
          children: Snippet; 
          size?: "sm" | "md";
          variant?: "primary" | "outline";
          startIcon?: Snippet; 
          endIcon?: Snippet;  
          onclick?: () => void;
          disabled?: boolean;
          className?: string;
     }

     let {
          children,
          size = "md",
          variant = "primary",
          startIcon,
          endIcon,
          onclick,
          disabled = false,
          className = "",
     }: Props = $props();

     const sizeClasses = {
          sm: "px-4 py-3 text-sm",
          md: "px-5 py-3.5 text-sm",
     };

     const variantClasses = {
          primary: "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300",
          outline: "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
     };

     let combinedClasses = $derived(`
          inline-flex items-center justify-center font-medium gap-2 rounded-lg transition
          ${className}
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${disabled ? "cursor-not-allowed opacity-50" : ""}
     `.replace(/\s+/g, ' ').trim());
</script>

<button
     type="button"
     class={combinedClasses}
     {onclick}
     {disabled}
>
     {#if startIcon}
          <span class="flex items-center">
               {@render startIcon()}
          </span>
     {/if}

     {@render children()}

     {#if endIcon}
          <span class="flex items-center">
               {@render endIcon()}
          </span>
     {/if}
</button>