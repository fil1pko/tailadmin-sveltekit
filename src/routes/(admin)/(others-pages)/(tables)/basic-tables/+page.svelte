<script lang="ts">
     import ComponentCard from "$components/common/ComponentCard.svelte";
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
     import BasicTableOne from "$components/tables/BasicTableOne.svelte";
</script>

<svelte:head>
     <title>Svelte Basic Table | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Basic Table page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Basic Table" />

     <div class="space-y-6">
          <ComponentCard title="Basic Table 1">
               <BasicTableOne />
          </ComponentCard>
     </div>
</div>