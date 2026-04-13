<script>
     import Badge from '../ui/badge/Badge.svelte';
     import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from '$lib/icons';
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
     <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
               <GroupIcon class="text-gray-800 size-6 dark:text-white/90" />
          </div>

          <div class="flex items-end justify-between mt-5">
               <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                         Customers
                    </span>
                    <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                         3,782
                    </h4>
               </div>
               
               <Badge color="success">
                    <ArrowUpIcon />
                    11.01%
               </Badge>
          </div>
     </div>
     <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
               <BoxIconLine class="text-gray-800 dark:text-white/90" />
          </div>
          <div class="flex items-end justify-between mt-5">
               <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                         Orders
                    </span>
                    <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                         5,359
                    </h4>
               </div>

               <Badge color="error">
                    <ArrowDownIcon class="text-error-500" />
                    9.05%
               </Badge>
          </div>
     </div>
     </div>