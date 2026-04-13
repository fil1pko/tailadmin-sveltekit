<script lang="ts">
     let { children, class: className = "" } = $props();
</script>

<tbody class={className}>
     {@render children?.()}
</tbody>