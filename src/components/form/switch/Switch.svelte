<script lang="ts">
     interface Props {
          label: string;
          defaultChecked?: boolean;
          disabled?: boolean;
          onChange?: (checked: boolean) => void;
          color?: 'blue' | 'gray';
     }

     let {
          label,
          defaultChecked = false,
          disabled = false,
          onChange,
          color = 'blue',
     }: Props = $props();

     let isChecked = $state(defaultChecked);

     function handleToggle() {
          if (disabled) return;
          isChecked = !isChecked;
          onChange?.(isChecked);
     }

     const background = $derived(
          disabled
               ? 'bg-gray-100 pointer-events-none dark:bg-gray-800'
               : color === 'blue'
               ? isChecked
                    ? 'bg-brand-500'
                    : 'bg-gray-200 dark:bg-white/10'
               : isChecked
                    ? 'bg-gray-800 dark:bg-white/10'
                    : 'bg-gray-200 dark:bg-white/10'
     );

     const knob = $derived(
          isChecked ? 'translate-x-full bg-white' : 'translate-x-0 bg-white'
     );
</script>

<div
     class="flex cursor-pointer select-none items-center gap-3 text-sm font-medium {disabled
          ? 'text-gray-400'
          : 'text-gray-700 dark:text-gray-400'}"
>
     <button
          type="button"
          role="switch"
          aria-checked={isChecked}
          aria-label={label}
          {disabled}
          onclick={handleToggle}
          class="relative focus:outline-none"
     >
          <div class="block transition duration-150 ease-linear h-6 w-11 rounded-full {background}"></div>
          <div class="absolute left-0.5 top-0.5 h-5 w-5 rounded-full shadow-theme-sm duration-150 ease-linear transform {knob}"></div>
     </button>
     <span>{label}</span>
</div>