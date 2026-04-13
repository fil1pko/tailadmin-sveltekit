<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import Checkbox from "../input/Checkbox.svelte";

     let isChecked = $state(false);
     let isCheckedTwo = $state(true);
     let isCheckedDisabled = $state(false);
</script>

<ComponentCard title="Checkbox">
     <div class="flex items-center gap-4">
          <div class="flex items-center gap-3">
               <Checkbox bind:checked={isChecked} />
               <span class="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Default
               </span>
          </div>

          <div class="flex items-center gap-3">
               <Checkbox
                    bind:checked={isCheckedTwo}
                    label="Checked"
               />
          </div>

          <div class="flex items-center gap-3">
               <Checkbox
                    bind:checked={isCheckedDisabled}
                    disabled={true}
                    label="Disabled"
               />
          </div>
     </div>
</ComponentCard>