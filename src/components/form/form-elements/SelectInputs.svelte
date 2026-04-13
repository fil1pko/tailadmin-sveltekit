<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import Label from "../Label.svelte";
     import Select from "../Select.svelte";
     import MultiSelect from "../MultiSelect.svelte";
     import { ChevronDownIcon } from "@/icons";

     const options = [
          { value: "marketing", label: "Marketing" },
          { value: "template", label: "Template" },
          { value: "development", label: "Development" },
     ];

     const multiOptions = [
          { value: "1", text: "Option 1", selected: false },
          { value: "2", text: "Option 2", selected: false },
          { value: "3", text: "Option 3", selected: false },
          { value: "4", text: "Option 4", selected: false },
          { value: "5", text: "Option 5", selected: false },
     ];

     let selectedValues = $state<string[]>([]);

     function handleSelectChange(value: string) {
          console.log("Selected value:", value);
     }

     function handleMultiChange(values: string[]) {
          selectedValues = values;
     }
</script>

<ComponentCard title="Select Inputs">
     <div class="space-y-6">
          <div>
               <Label>Select Input</Label>
               <div class="relative">
                    <Select
                         {options}
                         placeholder="Select Option"
                         onChange={handleSelectChange}
                         class="dark:bg-dark-900"
                    />
                    <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                         <ChevronDownIcon />
                    </span>
               </div>
          </div>

          <div class="relative">
               <MultiSelect
                    label="Multiple Select Options"
                    options={multiOptions}
                    defaultSelected={["1", "3"]}
                    onChange={handleMultiChange}
               />
               <p class="sr-only">
                    Selected Values: {selectedValues.join(", ")}
               </p>
          </div>
     </div>
</ComponentCard>