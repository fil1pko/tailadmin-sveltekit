<script lang="ts">
     let { children, class: className = "" } = $props();
</script>

<table class="min-w-full {className}">
     {@render children?.()}
</table>