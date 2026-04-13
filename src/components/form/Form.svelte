<script lang="ts">
     import type { Snippet } from "svelte";

     interface FormProps {
          onsubmit: (event: SubmitEvent) => void;
          children: Snippet; // Toto je správny typ pre Svelte 5 deti
          class?: string;
     }

     let { 
          onsubmit, 
          children, 
          class: className = "" 
     }: FormProps = $props();

     function handleSubmit(event: SubmitEvent) {
          event.preventDefault();
          if (onsubmit) {
               onsubmit(event);
          }
     }
</script>

<form
     onsubmit={handleSubmit}
     class={className}
>
     {@render children()}
</form>