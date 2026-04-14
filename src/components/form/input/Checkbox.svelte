<script lang="ts">
     let {
          label,
          checked = $bindable(false),
          id,
          class: className = "",
          disabled = false,
          // PRIDAJ TOTO: definujeme onchange prop, aby o nej TypeScript vedel
          onchange 
     }: {
          label?: string;
          checked: boolean;
          class?: string;
          id?: string;
          disabled?: boolean;
          onchange?: (checked: boolean) => void;
     } = $props();

     // Funkcia, ktorá obslúži zmenu
     function handleChange(e: Event) {
          const target = e.target as HTMLInputElement;
          // Ak používaš bind:checked, hodnota sa zmení automaticky,
          // ale ak chceš manuálne volať onchange callback (ako v Reacte):
          if (onchange) {
               onchange(target.checked);
          }
     }
</script>

<label
     class="flex items-center space-x-3 group cursor-pointer {disabled ? 'cursor-not-allowed opacity-60' : ''}"
>
     <div class="relative w-5 h-5">
          <input
               {id}
               type="checkbox"
               bind:checked
               {disabled}
               /* Pridáme event listener */
               onchange={handleChange}
               class="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 {className}"
          />
          
          {#if checked}
               <svg class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
          {/if}

          {#if disabled && !checked}
               <svg class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="#E4E7EC" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
          {/if}
     </div>

     {#if label}
          <span class="text-sm font-medium text-gray-800 dark:text-gray-200">
               {label}
          </span>
     {/if}
</label>