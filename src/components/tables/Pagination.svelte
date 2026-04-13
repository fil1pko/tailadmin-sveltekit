<script lang="ts">

     let { 
          currentPage, 
          totalPages, 
          onPageChange 
     }: {
          currentPage: number;
          totalPages: number;
          onPageChange: (page: number) => void;
     } = $props();

     let pagesAroundCurrent = $derived(
          Array.from(
               { length: Math.min(3, totalPages) },
               (_, i) => {
                    let start = Math.max(currentPage - 1, 1);
          
                    if (start + 2 > totalPages) start = Math.max(totalPages - 2, 1);
                    return i + start;
               }
          )
     );
</script>

<div class="flex items-center">
     <button
          onclick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          class="mr-2.5 flex items-center h-10 justify-center rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-gray-700 shadow-theme-xs hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] text-sm"
     >
          Previous
     </button>

     <div class="flex items-center gap-2">
          {#if currentPage > 2 && totalPages > 3}
               <span class="px-2 text-gray-500">...</span>
          {/if}

          {#each pagesAroundCurrent as page (page)}
               <button
                    onclick={() => onPageChange(page)}
                    class="flex w-10 items-center justify-center h-10 rounded-lg text-sm font-medium transition-colors
                         {currentPage === page
                         ? 'bg-brand-500 text-white'
                         : 'text-gray-700 dark:text-gray-400 hover:bg-brand-500/[0.08] hover:text-brand-500 dark:hover:text-brand-500'}"
               >
                    {page}
               </button>
          {/each}

          {#if currentPage < totalPages - 1 && totalPages > 3}
               <span class="px-2 text-gray-500">...</span>
          {/if}
     </div>

     <button
          onclick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          class="ml-2.5 flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-gray-700 shadow-theme-xs text-sm hover:bg-gray-50 h-10 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
     >
          Next
     </button>
</div>