<script lang="ts">
     import EcommerceMetrics from "$components/ecommerce/EcommerceMetrics.svelte";
     import MonthlySalesChart from "$components/ecommerce/MonthlySalesChart.svelte";
     import MonthlyTarget from "$components/ecommerce/MonthlyTarget.svelte";
     import StatisticsChart from "$components/ecommerce/StatisticsChart.svelte";
     import DemographicCard from "$components/ecommerce/DemographicCard.svelte";
     import RecentOrders from "$components/ecommerce/RecentOrders.svelte";
</script>

<svelte:head>
     <title>SvelteKit E-commerce Dashboard | TailAdmin - SvelteKit Template</title>
     <meta name="description" content="This is SvelteKit Home for TailAdmin Dashboard Template" />
</svelte:head>

<div class="grid grid-cols-12 gap-4 md:gap-6">
     <div class="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
          <MonthlySalesChart />
     </div>

     <div class="col-span-12 xl:col-span-5">
          <MonthlyTarget />
     </div>

     <div class="col-span-12">
          <StatisticsChart />
     </div>

     <div class="col-span-12 xl:col-span-5">
          <DemographicCard />
     </div>

     <div class="col-span-12 xl:col-span-7">
          <RecentOrders />
     </div>
</div>