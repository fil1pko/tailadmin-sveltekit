<script lang="ts">
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
     import CheckboxComponents from "$components/form/form-elements/CheckboxComponents.svelte";
     import DefaultInputs from "$components/form/form-elements/DefaultInputs.svelte";
     import DropzoneComponent from "$components/form/form-elements/DropZone.svelte";
     import FileInputExample from "$components/form/form-elements/FileInputExample.svelte";
     import InputGroup from "$components/form/form-elements/InputGroup.svelte";
     import InputStates from "$components/form/form-elements/InputStates.svelte";
     import RadioButtons from "$components/form/form-elements/RadioButtons.svelte";
     import SelectInputs from "$components/form/form-elements/SelectInputs.svelte";
     import TextAreaInput from "$components/form/form-elements/TextAreaInput.svelte";
     import ToggleSwitch from "$components/form/form-elements/ToggleSwitch.svelte";
</script>

<svelte:head>
     <title>Svelte Form Elements | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Form Elements page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Form Elements" />
     
     <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div class="space-y-6">
               <DefaultInputs />
               <SelectInputs />
               <TextAreaInput />
               <InputStates />
          </div>

          <div class="space-y-6">
               <InputGroup />
               <FileInputExample />
               <CheckboxComponents />
               <RadioButtons />
               <ToggleSwitch />
               <DropzoneComponent />
          </div>
     </div>
</div>