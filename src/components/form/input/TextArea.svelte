<script lang="ts">
     interface TextareaProps {
          placeholder?: string;
          rows?: number;
          value?: string;
          onChange?: (value: string) => void;
          class?: string;
          disabled?: boolean;
          error?: boolean;
          hint?: string;
     }

     let {
          placeholder = "Enter your message",
          rows = 3,
          value = $bindable(""),
          onChange,
          class: className = "",
          disabled = false,
          error = false,
          hint = ""
     }: TextareaProps = $props();

     const textareaClasses = $derived.by(() => {
          let base = `w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs transition-colors focus:outline-hidden ${className}`;

          if (disabled) {
               return `${base} bg-gray-100 opacity-50 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
          }
          if (error) {
               return `${base} bg-transparent text-gray-400 border-gray-300 focus:border-error-300 focus:ring-3 focus:ring-error-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-error-800`;
          }
          return `${base} bg-transparent text-gray-400 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
     });

     function handleInput(e: Event) {
          const target = e.target as HTMLTextAreaElement;
          value = target.value;
          if (onChange) {
               onChange(value);
          }
     }
</script>

<div class="relative">
     <textarea
          {placeholder}
          {rows}
          {disabled}
          class={textareaClasses}
          bind:value
          oninput={handleInput}
     ></textarea>

     {#if hint}
          <p class="mt-2 text-sm {error ? 'text-error-500' : 'text-gray-500 dark:text-gray-400'}">
               {hint}
          </p>
     {/if}
</div>