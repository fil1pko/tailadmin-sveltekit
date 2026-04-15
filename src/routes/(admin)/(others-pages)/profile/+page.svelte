<script lang="ts">
     import UserAddressCard from "$components/user-profile/UserAddressCard.svelte";
     import UserInfoCard from "$components/user-profile/UserInfoCard.svelte";
     import UserMetaCard from "$components/user-profile/UserMetaCard.svelte";
</script>

<svelte:head>
     <title>Svelte Profile | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Profile page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
          <h3 class="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
               Profile
          </h3>
          
          <div class="space-y-6">
               <UserMetaCard />
               <UserInfoCard />
               <UserAddressCard />
          </div>
     </div>
</div>