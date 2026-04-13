<script lang="ts">
     interface Option {
          value: string;
          label: string;
     }

     interface Props {
          options: Option[];
          placeholder?: string;
          onChange?: (value: string) => void;
          class?: string;
          defaultValue?: string;
     }

     let {
          options,
          placeholder = "Select an option",
          onChange,
          class: className = "",
          defaultValue = "",
     }: Props = $props();

     let selectedValue = $derived.by(() => defaultValue);
     let _selectedValue = $state("");

     $effect(() => {
          _selectedValue = selectedValue;
     });

     function handleChange(e: Event) {
          const target = e.target as HTMLSelectElement;
          _selectedValue = target.value;
          onChange?.(_selectedValue);
     }  
</script>

<select
     class={[
          "h-11 w-full appearance-none rounded-lg border border-gray-300 px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800",
          _selectedValue
               ? "text-gray-800 dark:text-white/90"
               : "text-gray-400 dark:text-gray-400",
          className,
     ].join(" ")}
     value={_selectedValue}
     onchange={handleChange}
>
     <option value="" disabled class="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
          {placeholder}
     </option>

     {#each options as option (option.value)}
          <option value={option.value} class="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
               {option.label}
          </option>
     {/each}
</select>