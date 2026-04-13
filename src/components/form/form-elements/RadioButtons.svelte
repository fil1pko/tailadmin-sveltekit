<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import Radio from "../input/Radio.svelte";

     let selectedValue = $state("option2");

     function handleRadioChange(value: string) {
          selectedValue = value;
          console.log("Selected:", selectedValue);
     }
</script>

<ComponentCard title="Radio Buttons">
     <div class="flex flex-wrap items-center gap-8">
          <Radio
               id="radio1"
               name="group1"
               value="option1"
               checked={selectedValue === "option1"}
               onchange={() => handleRadioChange("option1")}
               label="Default"
          />
          
          <Radio
               id="radio2"
               name="group1"
               value="option2"
               checked={selectedValue === "option2"}
               onchange={() => handleRadioChange("option2")}
               label="Selected"
          />

          <Radio
               id="radio3"
               name="group1"
               value="option3"
               checked={selectedValue === "option3"}
               onchange={() => handleRadioChange("option3")}
               label="Disabled"
               disabled={true}
          />
     </div>
</ComponentCard>