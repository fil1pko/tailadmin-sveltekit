<script lang="ts">
     import BarChartOne from "$components/charts/bar/BarChartOne.svelte";
     import ComponentCard from "$components/common/ComponentCard.svelte";
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
</script>

<svelte:head>
     <title>Svelte Bar Chart | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Bar Chart page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Bar Chart" />

     <div class="space-y-6">
          <ComponentCard title="Bar Chart 1">
               <BarChartOne />
          </ComponentCard>
     </div>
</div>