<script lang="ts">
     interface RadioProps {
          id: string;
          name: string;
          value: string;
          checked: boolean;
          label: string;
          onchange: (value: string) => void;
          class?: string;
          disabled?: boolean;
     }

     let {
          id,
          name,
          value,
          checked = $bindable(), 
          label,
          onchange,
          class: className = "",
          disabled = false
     }: RadioProps = $props();

     function handleChange() {
          if (!disabled) {
               if (onchange) onchange(value);
          }
     }
</script>

<label
     for={id}
     class="relative flex cursor-pointer select-none items-center gap-3 text-sm font-medium 
     {disabled
          ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
          : 'text-gray-700 dark:text-gray-400'} 
     {className}"
>
     <input
          {id}
          {name}
          type="radio"
          {value}
          checked={checked} 
          onchange={handleChange}
          class="sr-only"
          {disabled}
     />
     
     <span
          class="flex h-5 w-5 items-center justify-center rounded-full border-[1.25px] 
          {checked
               ? 'border-brand-500 bg-brand-500'
               : 'bg-transparent border-gray-300 dark:border-gray-700'} 
          {disabled
               ? 'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-700'
               : ''}"
     >
          <span
               class="h-2 w-2 rounded-full bg-white {checked ? 'block' : 'hidden'}"
          ></span>
     </span>
     
     {label}
</label>