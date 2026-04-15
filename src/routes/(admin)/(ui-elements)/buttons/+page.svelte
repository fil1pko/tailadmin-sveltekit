<script lang="ts">
     import ComponentCard from "$components/common/ComponentCard.svelte";
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
     import Button from "$components/ui/button/Button.svelte";
     import { BoxIcon } from "@/icons";
</script>

<svelte:head>
     <title>Svelte Buttons | TailAdmin - Svelte Dashboard Template</title>
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Buttons" />
     
     <div class="space-y-5 sm:space-y-6">
          
          <ComponentCard title="Primary Button">
               <div class="flex items-center gap-5">
                    <Button size="sm" variant="primary">Button Text</Button>
                    <Button size="md" variant="primary">Button Text</Button>
               </div>
          </ComponentCard>

          <ComponentCard title="Primary Button with Left Icon">
               <div class="flex items-center gap-5">
                    <Button size="sm" variant="primary">
                         {#snippet startIcon()}<BoxIcon />{/snippet}
                         Button Text
                    </Button>
                    <Button size="md" variant="primary">
                         {#snippet startIcon()}<BoxIcon />{/snippet}
                         Button Text
                    </Button>
               </div>
          </ComponentCard>

          <ComponentCard title="Primary Button with Right Icon">
               <div class="flex items-center gap-5">
                    <Button size="sm" variant="primary">
                         Button Text
                         {#snippet endIcon()}<BoxIcon />{/snippet}
                    </Button>
                    <Button size="md" variant="primary">
                         Button Text
                         {#snippet endIcon()}<BoxIcon />{/snippet}
                    </Button>
               </div>
          </ComponentCard>

          <ComponentCard title="Secondary Button">
               <div class="flex items-center gap-5">
                    <Button size="sm" variant="outline">Button Text</Button>
                    <Button size="md" variant="outline">Button Text</Button>
               </div>
          </ComponentCard>

          <ComponentCard title="Outline Button with Left Icon">
               <div class="flex items-center gap-5">
                    <Button size="sm" variant="outline">
                         {#snippet startIcon()}<BoxIcon />{/snippet}
                         Button Text
                    </Button>
                    <Button size="md" variant="outline">
                         {#snippet startIcon()}<BoxIcon />{/snippet}
                         Button Text
                    </Button>
               </div>
          </ComponentCard>

          <ComponentCard title="Outline Button with Right Icon">
               <div class="flex items-center gap-5">
                    <Button size="sm" variant="outline">
                         Button Text
                         {#snippet endIcon()}<BoxIcon />{/snippet}
                    </Button>
                    <Button size="md" variant="outline">
                         Button Text
                         {#snippet endIcon()}<BoxIcon />{/snippet}
                    </Button>
               </div>
          </ComponentCard>

     </div>
</div>