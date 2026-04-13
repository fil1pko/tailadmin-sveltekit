<script lang="ts">
     let { children, class: className = "" } = $props();
</script>

<tr class={className}>
     {@render children?.()}
</tr>