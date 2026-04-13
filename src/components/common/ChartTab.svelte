<script lang="ts">
     type Option = "optionOne" | "optionTwo" | "optionThree";

     let selected = $state<Option>("optionOne");

     const getButtonClass = (option: Option) =>
          selected === option
               ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
               : "text-gray-500 dark:text-gray-400";
</script>

<div class="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
     <button
          onclick={() => (selected = "optionOne")}
          class="px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white {getButtonClass(
               'optionOne'
          )}"
     >
          Monthly
     </button>

     <button
          onclick={() => (selected = "optionTwo")}
          class="px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white {getButtonClass(
               'optionTwo'
          )}"
     >
          Quarterly
     </button>

     <button
          onclick={() => (selected = "optionThree")}
          class="px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white {getButtonClass(
               'optionThree'
          )}"
     >
          Annually
     </button>
</div>