<script lang="ts">
     import ComponentCard from "$components/common/ComponentCard.svelte";
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
     import ResponsiveImage from "$components/ui/images/ResponsiveImage.svelte";
     import ThreeColumnImageGrid from "$components/ui/images/ThreeColumnImageGrid.svelte";
     import TwoColumnImageGrid from "$components/ui/images/TwoColumnImageGrid.svelte";
</script>

<svelte:head>
     <title>Svelte Images | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Images page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Images" />

     <div class="space-y-5 sm:space-y-6">
          <ComponentCard title="Responsive image">
               <ResponsiveImage />
          </ComponentCard>

          <ComponentCard title="Image in 2 Grid">
               <TwoColumnImageGrid />
          </ComponentCard>

          <ComponentCard title="Image in 3 Grid">
               <ThreeColumnImageGrid />
          </ComponentCard>
     </div>
</div>