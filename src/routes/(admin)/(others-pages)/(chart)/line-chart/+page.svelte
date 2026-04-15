<script lang="ts">
     import LineChartOne from "$components/charts/line/LineChartOne.svelte";
     import ComponentCard from "$components/common/ComponentCard.svelte";
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
</script>

<svelte:head>
     <title>Svelte Line Chart | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Line Chart page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Line Chart" />

     <div class="space-y-6">
          <ComponentCard title="Line Chart 1">
               <LineChartOne />
          </ComponentCard>
     </div>
</div>