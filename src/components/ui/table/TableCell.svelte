<script lang="ts">
     let { children, isHeader = false, class: className = "" } = $props();
</script>

{#if isHeader}
     <th class={className}>{@render children?.()}</th>
{:else}
     <td class={className}>{@render children?.()}</td>
{/if}