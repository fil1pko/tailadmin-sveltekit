<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import Button from "../../ui/button/Button.svelte";
     import { Modal } from "../../ui/modal";

     let isFullscreenModalOpen = $state(false);

     function openFullscreenModal() {
          isFullscreenModalOpen = true;
     }

     function closeFullscreenModal() {
          isFullscreenModalOpen = false;
     }

     function handleSave() {
          console.log("Saving changes...");
          closeFullscreenModal();
     }
</script>

<ComponentCard title="Full Screen Modal">
     <Button size="sm" onclick={openFullscreenModal}>
          Open Modal
     </Button>

     <Modal
          isOpen={isFullscreenModalOpen}
          onClose={closeFullscreenModal}
          isFullscreen={true}
          showCloseButton={true}
     >
          <div class="fixed top-0 left-0 flex flex-col justify-between w-full h-screen p-6 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-900 lg:p-10">
               <div>
                    <h4 class="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">
                         Modal Heading
                    </h4>
                    <p class="text-sm leading-6 text-gray-500 dark:text-gray-400">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Pellentesque euismod est quis mauris lacinia pharetra. Sed a
                         ligula ac odio condimentum aliquet a nec nulla. Aliquam bibendum
                         ex sit amet ipsum rutrum feugiat ultrices enim quam.
                    </p>
                    <p class="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Pellentesque euismod est quis mauris lacinia pharetra. Sed a
                         ligula ac odio condimentum aliquet a nec nulla. Aliquam bibendum
                         ex sit amet ipsum rutrum feugiat ultrices enim quam odio
                         condimentum aliquet a nec nulla pellentesque euismod est quis
                         mauris lacinia pharetra.
                    </p>
                    <p class="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Pellentesque euismod est quis mauris lacinia pharetra.
                    </p>
               </div>
               
               <div class="flex items-center justify-end w-full gap-3 mt-8">
                    <Button size="sm" variant="outline" onclick={closeFullscreenModal}>
                         Close
                    </Button>
                    <Button size="sm" onclick={handleSave}>
                         Save Changes
                    </Button>
               </div>
          </div>
     </Modal>
</ComponentCard>