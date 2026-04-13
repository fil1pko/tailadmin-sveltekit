<script lang="ts">
     interface RadioProps {
          id: string;
          name: string;
          value: string;
          checked: boolean;
          label: string;
          onchange: (value: string) => void;
          class?: string;
     }

     let {
          id,
          name,
          value,
          checked,
          label,
          onchange,
          class: className = ""
     }: RadioProps = $props();

     function handleChange() {
          if (onchange) {
               onchange(value);
          }
     }
</script>

<label
     for={id}
     class="flex cursor-pointer select-none items-center text-sm text-gray-500 dark:text-gray-400 {className}"
>
     <span class="relative">
          <input
               type="radio"
               {id}
               {name}
               {value}
               checked={checked}
               onchange={handleChange}
               class="sr-only"
          />
          <span
               class="mr-2 flex h-4 w-4 items-center justify-center rounded-full border
               {checked
                    ? 'border-brand-500 bg-brand-500'
                    : 'bg-transparent border-gray-300 dark:border-gray-700'}"
          >
               <span
                    class="h-1.5 w-1.5 rounded-full
                    {checked ? 'bg-white' : 'bg-white dark:bg-[#1e2636]'}"
               ></span>
          </span>
     </span>
     {label}
</label>