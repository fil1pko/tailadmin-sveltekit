<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import Switch from "../switch/Switch.svelte";

     function handleSwitchChange(checked: boolean) {
          console.log("Switch is now:", checked ? "ON" : "OFF");
     }
</script>

<ComponentCard title="Toggle switch input">
     <div class="flex gap-4">
          <Switch
               label="Default"
               defaultChecked={true}
               onChange={handleSwitchChange}
          />
          <Switch
               label="Checked"
               defaultChecked={true}
               onChange={handleSwitchChange}
          />
          <Switch 
               label="Disabled" 
               disabled={true} 
          />
     </div>

     <div class="flex gap-4 mt-6">
          <Switch
               label="Default"
               defaultChecked={true}
               onChange={handleSwitchChange}
               color="gray"
          />
          <Switch
               label="Checked"
               defaultChecked={true}
               onChange={handleSwitchChange}
               color="gray"
          />
          <Switch 
               label="Disabled" 
               disabled={true} 
               color="gray" 
          />
     </div>
</ComponentCard>