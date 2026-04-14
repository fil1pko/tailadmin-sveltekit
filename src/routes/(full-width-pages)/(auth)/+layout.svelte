<script lang="ts">
     import { resolve } from "$app/paths";

     import GridShape from "$components/common/GridShape.svelte";
     import ThemeTogglerTwo from "$components/common/ThemeTogglerTwo.svelte";
     import { themeState } from "$lib/context/theme.svelte";
  
  let { children } = $props();
</script>

<div class="relative z-1 p-6 sm:p-0 {themeState.current === 'dark' ? 'bg-gray-900' : 'bg-white'}">  
     <div class="relative flex h-screen w-full flex-col justify-center dark:bg-gray-900 lg:flex-row sm:p-0">
    
          {@render children()}

          <div class="bg-brand-950 hidden h-full w-full items-center dark:bg-white/5 lg:grid lg:w-1/2">
               <div class="relative z-1 flex items-center justify-center">
                    <GridShape />
                    
                    <div class="flex max-w-xs flex-col items-center">
                         <a href={resolve('/')} class="mb-4 block">
                              <img
                                   width="231"
                                   height="48"
                                   src="/images/logo/auth-logo.svg" 
                                   alt="Logo"
                              />
                         </a>
                         <p class="text-center text-gray-400 dark:text-white/60">
                              Free and Open-Source Tailwind CSS Admin Dashboard Template
                         </p>
                    </div>
               </div>
          </div>

          <div class="fixed bottom-6 right-6 z-50 hidden sm:block">
               <ThemeTogglerTwo />
          </div>
     </div>
</div>