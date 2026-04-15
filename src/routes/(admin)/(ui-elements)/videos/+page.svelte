<script lang="ts">
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
     import VideosExample from "$components/ui/video/VideosExample.svelte";
</script>

<svelte:head>
     <title>Svelte Videos | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Videos page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Videos" />

     <VideosExample />
</div>