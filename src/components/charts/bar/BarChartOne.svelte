<script lang="ts">
     import { onMount, onDestroy } from 'svelte';
     import type ApexCharts from 'apexcharts';

     let chartEl: HTMLDivElement;
     let chart: ApexCharts;

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
               categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
               axisBorder: { show: false },
               axisTicks: { show: false },
          },
          legend: {
               show: true,
               position: 'top' as const,
               horizontalAlign: 'left' as const,
               fontFamily: 'Outfit',
          },
          yaxis: {
               title: { text: undefined },
          },
          grid: {
               yaxis: { lines: { show: true } },
          },
          fill: { opacity: 1 },
          tooltip: {
               x: { show: false },
               y: {
               formatter: (val: number) => `${val}`,
               },
          },
     };

     const series = [
          {
               name: 'Sales',
               data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
          },
     ];

     onMount(async () => {
          const ApexCharts = (await import('apexcharts')).default;
          chart = new ApexCharts(chartEl, { ...options, series });
          chart.render();
     });

     onDestroy(() => {
          chart?.destroy();
     });
</script>

<div class="max-w-full overflow-x-auto custom-scrollbar">
     <div id="chartOne" class="min-w-[1000px]">
          <div bind:this={chartEl}></div>
     </div>
</div>