<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type ApexCharts from 'apexcharts';

	let chartEl: HTMLDivElement;
	let chart: ApexCharts;

	const options = {
		legend: {
			show: false,
			position: 'top' as const,
			horizontalAlign: 'left' as const,
		},
		colors: ['#465FFF', '#9CB9FF'],
		chart: {
			fontFamily: 'Outfit, sans-serif',
			height: 310,
			type: 'area' as const,
			toolbar: { show: false },
		},
		stroke: {
			curve: 'straight' as const,
			width: [2, 2],
		},
		fill: {
			type: 'gradient',
			gradient: { opacityFrom: 0.55, opacityTo: 0 },
		},
		markers: {
			size: 0,
			strokeColors: '#fff',
			strokeWidth: 2,
			hover: { size: 6 },
		},
		grid: {
			xaxis: { lines: { show: false } },
			yaxis: { lines: { show: true } },
		},
		dataLabels: { enabled: false },
		tooltip: {
			enabled: true,
			x: { format: 'dd MMM yyyy' },
		},
		xaxis: {
			type: 'category' as const,
			categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
			axisBorder: { show: false },
			axisTicks: { show: false },
			tooltip: { enabled: false },
		},
		yaxis: {
			labels: {
			style: { fontSize: '12px', colors: ['#6B7280'] },
			},
			title: { text: '', style: { fontSize: '0px' } },
		},
	};

	const series = [
		{
			name: 'Sales',
			data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
		},
		{
			name: 'Revenue',
			data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
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
	<div id="chartEight" class="min-w-[1000px]">
		<div bind:this={chartEl}></div>
	</div>
</div>