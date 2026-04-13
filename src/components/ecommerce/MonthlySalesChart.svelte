<script lang="ts">
     import { onMount, onDestroy } from 'svelte';
     import { MoreDotIcon } from '$lib/icons';
     import Dropdown from '../ui/dropdown/Dropdown.svelte';
     import DropdownItem from '../ui/dropdown/DropdownItem.svelte';
     import type ApexCharts from 'apexcharts';

     let chartEl: HTMLDivElement;
     let chart: ApexCharts | null = null;
     let isOpen = $state(false);

     const options = {
          colors: ['#465fff'],
          chart: {
               fontFamily: 'Outfit, sans-serif',
               type: 'bar' as const, 
               height: 180,
               toolbar: { show: false },
          },
          plotOptions: {
               bar: {
                    horizontal: false,
                    columnWidth: '39%',
                    borderRadius: 5,
                    borderRadiusApplication: 'end' as const, 
               },
          },
          dataLabels: { enabled: false },
          stroke: {
               show: true,
               width: 4,
               colors: ['transparent'],
          },
          xaxis: {
               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
               axisBorder: { show: false },
               axisTicks: { show: false },
          },
          legend: {
               show: true,
               position: 'top' as const, 
               horizontalAlign: 'left' as const, 
               fontFamily: 'Outfit',
          },
          grid: {
               yaxis: { lines: { show: true } },
          },
          fill: { opacity: 1 },
          tooltip: {
               x: { show: false },
               y: { formatter: (val: number) => `${val}` },
          },
     };

     const series = [
          {
               name: 'Sales',
               data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
          },
     ];

     function toggleDropdown() {
          isOpen = !isOpen;
     }

     function closeDropdown() {
          isOpen = false;
     }

     onMount(async () => {
          const ApexChartsModule = (await import('apexcharts')).default;
          if (chartEl) {
               chart = new ApexChartsModule(chartEl, { ...options, series });
               chart?.render();
          }
     });

     onDestroy(() => {
          if (chart) {
               chart.destroy();
          }
     });
</script>

<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
     <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">
               Monthly Sales
          </h3>

          <div class="relative inline-block">
               <button onclick={toggleDropdown} class="dropdown-toggle">
                    <MoreDotIcon class="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
               </button>
               
               <Dropdown {isOpen} onClose={closeDropdown} class="w-40 p-2">
                    <DropdownItem
                         onItemClick={closeDropdown}
                         class="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                         View More
                    </DropdownItem>
                    <DropdownItem
                         onItemClick={closeDropdown}
                         class="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                    >
                         Delete
                    </DropdownItem>
               </Dropdown>
          </div>
     </div>

     <div class="max-w-full overflow-x-auto custom-scrollbar">
          <div class="-ml-5 min-w-[650px] xl:min-w-full pl-2">
               <div bind:this={chartEl}></div>
          </div>
     </div>
</div>