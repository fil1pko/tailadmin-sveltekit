<script lang="ts">
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
     import DefaultModal from "$components/example/ModalExample/DefaultModal.svelte";
     import FormInModal from "$components/example/ModalExample/FormInModal.svelte";
     import FullScreenModal from "$components/example/ModalExample/FullScreenModal.svelte";
     import ModalBasedAlerts from "$components/example/ModalExample/ModalBasedAllerts.svelte";
     import VerticallyCenteredModal from "$components/example/ModalExample/VerticallyCenteredModal.svelte";
</script>

<svelte:head>
     <title>Svelte Modals | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Modals page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Modals" />
     
     <div class="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6">
          <DefaultModal />
          <VerticallyCenteredModal />
          <FormInModal />
          <FullScreenModal />
          <ModalBasedAlerts />
     </div>
</div>