<script lang="ts">
     let { children, class: className = "" } = $props();
</script>

<thead class={className}>
     {@render children?.()}
</thead>