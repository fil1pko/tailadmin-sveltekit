<script lang="ts">
     import { onMount } from "svelte";

     interface Option {
          value: string;
          text: string;
          selected: boolean;
     }

     interface Props {
          label: string;
          options: Option[];
          defaultSelected?: string[];
          onChange?: (selected: string[]) => void;
          disabled?: boolean;
     }

     let {
          label,
          options,
          defaultSelected = [],
          onChange,
          disabled = false,
     }: Props = $props();

     const initialSelected = $derived.by(() => defaultSelected);
     let selectedOptions = $state<string[]>([]);
     let isOpen = $state(false);
     let triggerId = $state("");

     $effect(() => {
          selectedOptions = [...initialSelected];
     });

     onMount(() => {
          triggerId = `multiselect-trigger-${Math.random().toString(36).slice(2, 7)}`;
     });

     function toggleDropdown() {
          if (disabled) return;
          isOpen = !isOpen;
     }

     function handleSelect(optionValue: string) {
          if (selectedOptions.includes(optionValue)) {
               selectedOptions = selectedOptions.filter((v) => v !== optionValue);
          } else {
               selectedOptions = [...selectedOptions, optionValue];
          }
          onChange?.(selectedOptions);
     }

     function removeOption(value: string, e: MouseEvent | KeyboardEvent) {
          e.stopPropagation();
          selectedOptions = selectedOptions.filter((opt) => opt !== value);
          onChange?.(selectedOptions);
     }

     const selectedValuesText = $derived(
          selectedOptions.map(
               (value) => options.find((o) => o.value === value)?.text ?? ""
          )
     );
</script>

<div class="w-full">
     <label
          for={triggerId}
          class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
     >
          {label}
     </label>

     <div class="relative z-20 inline-block w-full">
          <div class="relative flex flex-col items-center">

               <button
                    id={triggerId}
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    onclick={toggleDropdown}
                    {disabled}
                    class="mb-2 flex h-11 w-full rounded-lg border border-gray-300 py-1.5 pl-3 pr-3 shadow-theme-xs outline-hidden transition focus:border-brand-300 focus:shadow-focus-ring dark:border-gray-700 dark:bg-gray-900 dark:focus:border-brand-300"
               >
               <div class="flex flex-auto flex-wrap gap-2">
                    {#if selectedValuesText.length > 0}
                         {#each selectedValuesText as text, i (selectedOptions[i])}
                              <span class="group flex items-center justify-center rounded-full border-[0.7px] border-transparent bg-gray-100 py-1 pl-2.5 pr-2 text-sm text-gray-800 hover:border-gray-200 dark:bg-gray-800 dark:text-white/90 dark:hover:border-gray-800">
                                   <span class="max-w-full flex-initial">{text}</span>
                                   <span
                                        role="button"
                                        tabindex="0"
                                        aria-label={`Remove ${text}`}
                                        onclick={(e) => removeOption(selectedOptions[i], e)}
                                        onkeydown={(e) => {
                                             if (e.key === "Enter" || e.key === " ") {
                                             e.preventDefault();
                                             removeOption(selectedOptions[i], e);
                                             }
                                        }}
                                        class="cursor-pointer pl-2 text-gray-500 group-hover:text-gray-400 dark:text-gray-400"
                                   >
                                        <svg
                                             class="fill-current" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M3.40717 4.46881C3.11428 4.17591 3.11428 3.70104 3.40717 3.40815C3.70006 3.11525 4.17494 3.11525 4.46783 3.40815L6.99943 5.93975L9.53095 3.40822C9.82385 3.11533 10.2987 3.11533 10.5916 3.40822C10.8845 3.70112 10.8845 4.17599 10.5916 4.46888L8.06009 7.00041L10.5916 9.53193C10.8845 9.82482 10.8845 10.2997 10.5916 10.5926C10.2987 10.8855 9.82385 10.8855 9.53095 10.5926L6.99943 8.06107L4.46783 10.5927C4.17494 10.8856 3.70006 10.8856 3.40717 10.5927C3.11428 10.2998 3.11428 9.8249 3.40717 9.53201L5.93877 7.00041L3.40717 4.46881Z"
                                             />
                                        </svg>
                                   </span>
                              </span>
                         {/each}
                    {:else}
                         <span class="flex h-full items-center p-1 pr-2 text-sm text-gray-400 dark:text-gray-400">
                              Select option
                         </span>
                    {/if}
               </div>

               <div class="flex w-7 items-center py-1 pl-1 pr-1">
                    <svg class={["stroke-current transition-transform", isOpen ? "rotate-180" : ""].join(" ")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                         <path d="M4.79175 7.39551L10.0001 12.6038L15.2084 7.39551" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"stroke-linejoin="round"/>
                    </svg>
               </div>
               </button>

               {#if isOpen}
                    <ul
                         role="listbox"
                         aria-multiselectable="true"
                         class="absolute left-0 top-full z-40 max-h-60 w-full overflow-y-auto rounded-lg bg-white shadow-sm dark:bg-gray-900"
                    >
                         {#each options as option (option.value)}
                              <li
                                   role="option"
                                   aria-selected={selectedOptions.includes(option.value)}
                                   tabindex="0"
                                   onclick={() => handleSelect(option.value)}
                                   onkeydown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        handleSelect(option.value);
                                        }
                                   }}
                                   class={[
                                        "hover:bg-primary/5 w-full cursor-pointer border-b border-gray-200 dark:border-gray-800",
                                        "relative flex w-full items-center p-2 pl-2",
                                        selectedOptions.includes(option.value) ? "bg-primary/10" : "",
                                   ].join(" ")}
                              >
                                   <span class="mx-2 leading-6 text-gray-800 dark:text-white/90">
                                        {option.text}
                                   </span>
                              </li>
                         {/each}
                    </ul>
               {/if}
          </div>
     </div>
</div>