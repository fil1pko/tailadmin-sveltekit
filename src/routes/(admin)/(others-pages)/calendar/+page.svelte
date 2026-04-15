<script lang="ts">
     import Calendar from "$components/calendar/Calendar.svelte";
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
</script>

<svelte:head>
     <title>Svelte Calendar | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Calendar page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Calendar" />
     
     <Calendar />
</div>