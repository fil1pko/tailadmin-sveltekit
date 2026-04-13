<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import { Modal } from "../../ui/modal/index.svelte";
     import Button from "../../ui/button/Button.svelte";

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

<div>
     <ComponentCard title="Default Modal">
          <Button size="sm" onclick={openModal}>
               Open Modal
          </Button>

          <Modal
               {isOpen}
               onClose={closeModal}
               class="max-w-[600px] p-5 lg:p-10"
          >
               <h4 class="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">
                    Modal Heading
               </h4>
               <p class="text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod est quis mauris lacinia pharetra. Sed a ligula
                    ac odio condimentum aliquet a nec nulla. Aliquam bibendum ex sit
                    amet ipsum rutrum feugiat ultrices enim quam.
               </p>
               <p class="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod est quis mauris lacinia pharetra. Sed a ligula
                    ac odio.
               </p>
               <div class="flex items-center justify-end w-full gap-3 mt-8">
                    <Button size="sm" variant="outline" onclick={closeModal}>
                         Close
                    </Button>
                    <Button size="sm" onclick={handleSave}>
                         Save Changes
                    </Button>
               </div>
          </Modal>
     </ComponentCard>
</div>