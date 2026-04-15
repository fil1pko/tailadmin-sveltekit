<script>
     import CountryMap from './CountryMap.svelte';
     import { MoreDotIcon } from '$lib/icons'; 
     import Dropdown from '../ui/dropdown/Dropdown.svelte';
     import DropdownItem from '../ui/dropdown/DropdownItem.svelte';

     let isOpen = $state(false); 

     function toggleDropdown() {
          isOpen = !isOpen;
     }

     function closeDropdown() {
          isOpen = false;
     }
</script>

<div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
     <div class="flex justify-between">
          <div>
               <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Customers Demographic
               </h3>
               <p class="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                    Number of customer based on country
               </p>
          </div>

          <div class="relative inline-block">
               <button onclick={toggleDropdown} class="dropdown-toggle">
                    <MoreDotIcon class="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
               </button>
               
               <Dropdown {isOpen} onClose={closeDropdown} className="w-40 p-2">
                    <DropdownItem
                         onItemClick={closeDropdown}
                         className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                         View More
                    </DropdownItem>
                    <DropdownItem
                         onItemClick={closeDropdown}
                         className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                         Delete
                    </DropdownItem>
               </Dropdown>
          </div>
     </div>

     <div class="px-4 py-6 my-6 overflow-hidden border border-gary-200 rounded-2xl bg-gray-50 dark:border-gray-800 dark:bg-gray-900 sm:px-6">
          <div
               id="mapOne"
               class="mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
          >
               <CountryMap />
          </div>
     </div>

     <div class="space-y-5">
          <div class="flex items-center justify-between">
               <div class="flex items-center gap-3">
                    <div class="items-center w-full rounded-full max-w-8">
                         <img
                              width="48"
                              height="48"
                              src="/images/country/country-01.svg"
                              alt="usa"
                              class="w-full"
                         />
                    </div>
                    <div>
                         <p class="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                              USA
                         </p>
                         <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
                              2,379 Customers
                         </span>
                    </div>
               </div>

               <div class="flex w-full max-w-[140px] items-center gap-3">
                    <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                         <div 
                              class="absolute left-0 top-0 flex h-full items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"
                              style="width: 79%"
                         ></div>
                    </div>
                    <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                         79%
                    </p>
               </div>
          </div>

          <div class="flex items-center justify-between">
               <div class="flex items-center gap-3">
                    <div class="items-center w-full rounded-full max-w-8">
                         <img
                              width="48"
                              height="48"
                              class="w-full"
                              src="/images/country/country-02.svg"
                              alt="france"
                         />
                    </div>
                    <div>
                         <p class="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                              France
                         </p>
                         <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
                              589 Customers
                         </span>
                    </div>
               </div>

               <div class="flex w-full max-w-[140px] items-center gap-3">
                    <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                         <div 
                              class="absolute left-0 top-0 flex h-full items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"
                              style="width: 23%"
                         ></div>
                    </div>
                    <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                         23%
                    </p>
               </div>
          </div>
     </div>
</div>