<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import Button from "../../ui/button/Button.svelte";
     import { Modal } from "../../ui/modal/index.svelte";

     let isOpen = $state(false);

     function openModal() {
          isOpen = true;
     }

     function closeModal() {
          isOpen = false;
     }

     function handleSave() {
          console.log("Saving changes...");
          closeModal();
     }
</script>

<ComponentCard title="Vertically Centered Modal">
     <Button size="sm" onclick={openModal}>
          Open Modal
     </Button>

     <Modal
          {isOpen}
          onClose={closeModal}
          showCloseButton={false}
          class="max-w-[507px] p-6 lg:p-10"
     >
          <div class="text-center">
               <h4 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
                    All Done! Success Confirmed
               </h4>
               <p class="text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod est quis mauris lacinia pharetra.
               </p>

               <div class="flex items-center justify-center w-full gap-3 mt-8">
                    <Button size="sm" variant="outline" onclick={closeModal}>
                         Close
                    </Button>
                    <Button size="sm" onclick={handleSave}>
                         Save Changes
                    </Button>
               </div>
          </div>
     </Modal>
</ComponentCard>