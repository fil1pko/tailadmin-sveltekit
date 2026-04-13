<script lang="ts">
     interface InputProps {
          type?: string;
          id?: string;
          name?: string;
          placeholder?: string;
          value?: string | number;
          oninput?: (e: Event) => void;
          class?: string;
          min?: string;
          max?: string;
          step?: number;
          disabled?: boolean;
          success?: boolean;
          error?: boolean;
          hint?: string;
     }

     let {
          type = "text",
          id,
          name,
          placeholder,
          value = $bindable(),
          oninput,
          class: className = "",
          min,
          max,
          step,
          disabled = false,
          success = false,
          error = false,
          hint
     }: InputProps = $props();

     const inputClasses = $derived.by(() => {
          let base = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs transition-colors focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${className}`;

          if (disabled) {
               return `${base} text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
          }
          if (error) {
               return `${base} text-error-800 border-error-500 focus:ring-error-500/10 dark:text-error-400 dark:border-error-500`;
          }
          if (success) {
               return `${base} text-success-500 border-success-400 focus:ring-success-500/10 focus:border-success-300 dark:text-success-400 dark:border-success-500`;
          }
          return `${base} bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
     });

     const hintClasses = $derived(
          `mt-1.5 text-xs ${error ? "text-error-500" : success ? "text-success-500" : "text-gray-500"}`
     );
</script>

<div class="relative">
     <input
          {type}
          {id}
          {name}
          {placeholder}
          bind:value
          {oninput}
          {min}
          {max}
          {step}
          {disabled}
          class={inputClasses}
     />

     {#if hint}
          <p class={hintClasses}>
               {hint}
          </p>
     {/if}
</div>