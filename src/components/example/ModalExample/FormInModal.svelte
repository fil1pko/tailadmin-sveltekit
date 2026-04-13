<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import Button from "../../ui/button/Button.svelte";
     import { Modal } from "../../ui/modal/index.svelte";
     import Label from "../../form/Label.svelte";
     import Input from "../../form/input/InputField.svelte";

     let isOpen = $state(false);

     function openModal() {
          isOpen = true;
     }

     function closeModal() {
          isOpen = false;
     }

     function handleSave(event: Event) {
          event.preventDefault(); 
          console.log("Saving changes...");
          closeModal();
     }
</script>

<ComponentCard title="Form In Modal">
     <Button size="sm" onclick={openModal}>
          Open Modal
     </Button>

     <Modal
          {isOpen}
          onClose={closeModal}
          class="max-w-[584px] p-5 lg:p-10"
     >
          <form onsubmit={handleSave}>
               <h4 class="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                    Personal Information
               </h4>

               <div class="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                    <div class="col-span-1">
                         <Label>First Name</Label>
                         <Input type="text" placeholder="Emirhan" />
                    </div>

                    <div class="col-span-1">
                         <Label>Last Name</Label>
                         <Input type="text" placeholder="Boruch" />
                    </div>

                    <div class="col-span-1">
                         <Label>Email Address</Label>
                         <Input type="email" placeholder="emirhanboruch55@gmail.com" />
                    </div>

                    <div class="col-span-1">
                         <Label>Phone</Label>
                         <Input type="text" placeholder="+09 363 398 46" />
                    </div>

                    <div class="col-span-1 sm:col-span-2">
                         <Label>Bio</Label>
                         <Input type="text" placeholder="Team Manager" />
                    </div>
               </div>

               <div class="flex items-center justify-end w-full gap-3 mt-6">
                    <Button size="sm" variant="outline" onclick={closeModal} type="button">
                         Close
                    </Button>
                    <Button size="sm" type="submit">
                         Save Changes
                    </Button>
               </div>
          </form>
     </Modal>
</ComponentCard>