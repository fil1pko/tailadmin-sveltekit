<script lang="ts">
     import flatpickr from 'flatpickr';
     import 'flatpickr/dist/flatpickr.css';
     import Label from './Label.svelte';
     import { CalenderIcon } from '$lib/icons';
     import type { Options } from 'flatpickr/dist/types/options';

     // Definícia props
     let {
          id,
          mode = "single",
          onChange,
          defaultDate,
          label,
          placeholder = "Select Date"
     }: {
          id: string;
          mode?: "single" | "multiple" | "range" | "time";
          onChange?: Options['onChange'];
          defaultDate?: Options['defaultDate'];
          label?: string;
          placeholder?: string;
     } = $props();

     // Referencia na input element (namiesto hľadania cez ID v dokumente)
     let inputElement: HTMLInputElement;

     // Svelte 5 efekt pre inicializáciu a cleanup
     $effect(() => {
          const instance = flatpickr(inputElement, {
               mode,
               static: true,
               monthSelectorType: "static",
               dateFormat: "Y-m-d",
               defaultDate,
               onChange,
          });

          // Cleanup funkcia (spustí sa pri zániku komponentu alebo zmene závislostí)
          return () => {
               instance.destroy();
          };
     });
</script>

<div>
     {#if label}
          <Label for={id}>{label}</Label>
     {/if}

     <div class="relative">
          <input
               {id}
               bind:this={inputElement}
               {placeholder}
               class="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
          />

          <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
               <CalenderIcon class="size-6" />
          </span>
     </div>
</div>