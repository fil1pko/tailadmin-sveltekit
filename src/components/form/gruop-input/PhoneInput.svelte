<script lang="ts">
     interface CountryCode {
          code: string;
          label: string;
     }

     let {
          countries,
          placeholder = "+1 (555) 000-0000",
          onChange,
          selectPosition = "start"
     }: {
          countries: CountryCode[];
          placeholder?: string;
          onChange?: (phoneNumber: string) => void;
          selectPosition?: "start" | "end";
     } = $props();

     let selectedCountry = $state("US");
     let phoneNumber = $state("+1");

     const countryCodes = $derived(
          countries.reduce((acc, { code, label }) => ({ ...acc, [code]: label }), {} as Record<string, string>)
     );

     function handleCountryChange(e: Event) {
          const target = e.target as HTMLSelectElement;
          const newCountry = target.value;
          selectedCountry = newCountry;
          phoneNumber = countryCodes[newCountry];
          
          if (onChange) {
               onChange(phoneNumber);
          }
     }

     function handlePhoneNumberChange(e: Event) {
          const target = e.target as HTMLInputElement;
          phoneNumber = target.value;
          
          if (onChange) {
               onChange(phoneNumber);
          }
     }
</script>

<div class="relative flex">
     {#if selectPosition === "start"}
          <div class="absolute">
               <select
                    value={selectedCountry}
                    onchange={handleCountryChange}
                    class="appearance-none bg-none rounded-l-lg border-0 border-r border-gray-200 bg-transparent py-3 pl-3.5 pr-8 leading-tight text-gray-700 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:text-gray-400"
               >
                    {#each countries as country (country.code)}
                         <option
                              value={country.code}
                              class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                         >
                              {country.code}
                         </option>
                    {/each}
               </select>
               <div class="absolute inset-y-0 flex items-center text-gray-700 pointer-events-none bg-none right-3 dark:text-gray-400">
                    <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
               </div>
          </div>
     {/if}

     <input
          type="tel"
          value={phoneNumber}
          oninput={handlePhoneNumberChange}
          {placeholder}
          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 px-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800
          {selectPosition === 'start' ? 'pl-[84px]' : 'pr-[84px]'}"
     />

     {#if selectPosition === "end"}
          <div class="absolute right-0">
               <select
                    value={selectedCountry}
                    onchange={handleCountryChange}
                    class="appearance-none bg-none rounded-r-lg border-0 border-l border-gray-200 bg-transparent py-3 pl-3.5 pr-8 leading-tight text-gray-700 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:text-gray-400"
               >
                    {#each countries as country (country.code)}
                         <option
                              value={country.code}
                              class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                         >
                              {country.code}
                         </option>
                    {/each}
               </select>
               <div class="absolute inset-y-0 flex items-center text-gray-700 pointer-events-none right-3 dark:text-gray-400">
                    <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
               </div>
          </div>
     {/if}
</div>