<script lang="ts">
     import { onMount, onDestroy } from 'svelte';
     import { SvelteDate } from 'svelte/reactivity';
     import flatpickr from 'flatpickr';
     import type { Instance } from 'flatpickr/dist/types/instance'; 
     import 'flatpickr/dist/flatpickr.css';
     import ChartTab from '../common/ChartTab.svelte';
     import { CalenderIcon } from '$lib/icons';
     import type ApexCharts from 'apexcharts';
     import type { ApexOptions } from 'apexcharts';

     let chartEl: HTMLDivElement;
     let datePickerEl: HTMLInputElement;
     let chart: ApexCharts | null = null;
     
     let fp: Instance | null = null;


     const options: ApexOptions = {
          legend: { show: false },
          colors: ['#465FFF', '#9CB9FF'],
          chart: {
               fontFamily: 'Outfit, sans-serif',
               height: 310,
               type: 'area', 
               toolbar: { show: false }
          },
          stroke: { curve: 'straight', width: [2, 2] },
          fill: {
               type: 'gradient',
               gradient: { opacityFrom: 0.55, opacityTo: 0 }
          },
          xaxis: {
               type: 'category',
               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
               axisBorder: { show: false },
               axisTicks: { show: false }
          }
     };

     const series = [
          { name: 'Sales', data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235] },
          { name: 'Revenue', data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140] }
     ];

     onMount(async () => {
          const today = new SvelteDate();
          const sevenDaysAgo = new SvelteDate();
          sevenDaysAgo.setDate(today.getDate() - 6);

          fp = flatpickr(datePickerEl, {
               mode: 'range',
               static: true,
               monthSelectorType: 'static',
               dateFormat: 'M d',
               defaultDate: [sevenDaysAgo, today],
               prevArrow: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
               nextArrow: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          }) as Instance;

          const ApexChartsModule = (await import('apexcharts')).default;
          if (chartEl) {
               chart = new ApexChartsModule(chartEl, { 
                    ...options, 
                    series 
               });
               chart.render();
          }
     });

     onDestroy(() => {
          chart?.destroy();
          fp?.destroy();
     });
</script>

<div class="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
     <div class="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
          <div class="w-full">
               <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Statistics</h3>
               <p class="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">Target you've set for each month</p>
          </div>
          <div class="flex items-center gap-3 sm:justify-end">
               <ChartTab />
               <div class="relative inline-flex items-center">
                    <CalenderIcon class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none z-10 hidden lg:block" />
                    <input
                         bind:this={datePickerEl}
                         class="h-10 w-10 lg:w-40 lg:h-auto lg:pl-10 lg:pr-3 lg:py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-transparent lg:text-gray-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:lg:text-gray-300 cursor-pointer"
                         placeholder="Select date range"
                    />
               </div>
          </div>
     </div>

     <div class="max-w-full overflow-x-auto custom-scrollbar">
          <div class="min-w-[1000px] xl:min-w-full">
               <div bind:this={chartEl}></div>
          </div>
     </div>
</div>