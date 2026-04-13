<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import FileInput from "../input/FileInput.svelte";
     import Label from "../Label.svelte";

     function handleFileChange(event: Event) {
          const target = event.target as HTMLInputElement;
          const file = target.files?.[0];
          
          if (file) {
               console.log("Selected file:", file.name);
          }
     }
</script>

<ComponentCard title="File Input">
     <div>
          <Label>Upload file</Label>
          <FileInput 
               onchange={handleFileChange} 
               class="custom-class" 
          />
     </div>
</ComponentCard>