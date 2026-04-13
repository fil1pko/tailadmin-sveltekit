<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import TextArea from "../input/TextArea.svelte";
     import Label from "../Label.svelte";

     let message = $state("");
     let messageTwo = $state("");
</script>

<ComponentCard title="Textarea input field">
     <div class="space-y-6">
          <div>
               <Label>Description</Label>
               <TextArea
                    value={message}
                    onChange={(value: string) => (message = value)}
                    rows={6}
               />
          </div>

          <div>
               <Label>Description</Label>
               <TextArea rows={6} disabled={true} />
          </div>

          <div>
               <Label>Description</Label>
               <TextArea
                    rows={6}
                    value={messageTwo}
                    error={true}
                    onChange={(value: string) => (messageTwo = value)}
                    hint="Please enter a valid message."
               />
          </div>
     </div>
</ComponentCard>