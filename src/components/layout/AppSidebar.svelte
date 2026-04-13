<script lang="ts">
     import { page } from '$app/state'; 
     import { resolve } from '$app/paths';

     import { sidebarContext } from "$lib/context/sidebar.svelte";
     import SidebarWidget from "./SidebarWidget.svelte";
  
     import { 
          GridIcon, CalenderIcon, UserCircleIcon, ListIcon, TableIcon, 
          PageIcon, PieChartIcon, BoxCubeIcon, PlugInIcon, 
          ChevronDownIcon, HorizontaLDots 
     } from "$lib/icons";

     const sidebar = sidebarContext;

     const navItems = [
          { name: "Dashboard", icon: GridIcon, subItems: [{ name: "Ecommerce", path: "/" }] },
          { name: "Calendar", icon: CalenderIcon, path: "/calendar" },
          { name: "User Profile", icon: UserCircleIcon, path: "/profile" },
          { name: "Forms", icon: ListIcon, subItems: [{ name: "Form Elements", path: "/form-elements" }] },
          { name: "Tables", icon: TableIcon, subItems: [{ name: "Basic Tables", path: "/basic-tables" }] },
          { name: "Pages", icon: PageIcon, subItems: [{ name: "Blank Page", path: "/blank" }, { name: "404 Error", path: "/error-404" }] },
     ];

     const othersItems = [
          { name: "Charts", icon: PieChartIcon, subItems: [{ name: "Line Chart", path: "/line-chart" }, { name: "Bar Chart", path: "/bar-chart" }] },
          { name: "UI Elements", icon: BoxCubeIcon, subItems: [{ name: "Alerts", path: "/alerts" }, { name: "Avatar", path: "/avatars" }] },
          { name: "Authentication", icon: PlugInIcon, subItems: [{ name: "Sign In", path: "/signin" }, { name: "Sign Up", path: "/signup" }] },
     ];

     let openSubmenu = $state<{ type: "main" | "others"; index: number } | null>(null);
     let subMenuRefs = $state<Record<string, HTMLElement>>({});
     
     const isActive = (path: string) => page.url.pathname === path;

     $effect(() => {
     let matched = false;
          const sections = [
               { items: navItems, type: "main" as const },
               { items: othersItems, type: "others" as const }
          ];

          for (const section of sections) {
               section.items.forEach((nav, index) => {
               if (nav.subItems?.some(sub => isActive(sub.path))) {
                    openSubmenu = { type: section.type, index };
                    matched = true;
               }
               });
          }
          if (!matched) openSubmenu = null;
     });

     function handleSubmenuToggle(index: number, type: "main" | "others") {
     openSubmenu = (openSubmenu?.type === type && openSubmenu?.index === index) 
          ? null 
          : { type, index };
     }
</script>

<aside
     class="fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
          {sidebar.isExpanded || sidebar.isMobileOpen || sidebar.isHovered ? 'w-[290px]' : 'w-[90px]'}
          {sidebar.isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
     lg:translate-x-0"
     onmouseenter={() => !sidebar.isExpanded && sidebar.setIsHovered(true)}
     onmouseleave={() => sidebar.setIsHovered(false)}
>
     <div class="py-8 flex {!sidebar.isExpanded && !sidebar.isHovered ? 'lg:justify-center' : 'justify-start'}">
          <a href={resolve('/')}>
               {#if sidebar.isExpanded || sidebar.isHovered || sidebar.isMobileOpen}
                    <img class="dark:hidden" src="/images/logo/logo.svg" alt="Logo" width="150" height="40" />
                    <img class="hidden dark:block" src="/images/logo/logo-dark.svg" alt="Logo" width="150" height="40" />
               {:else}
                    <img src="/images/logo/logo-icon.svg" alt="Logo" width="32" height="32" />
               {/if}
          </a>
     </div>

     <div class="flex flex-col overflow-y-auto no-scrollbar grow">
          <nav class="mb-6">
               <div class="flex flex-col gap-4">
                    {#each [{title: 'Menu', items: navItems, type: 'main'}, {title: 'Others', items: othersItems, type: 'others'}] as section (section.type)}
                         <div>
                              <h2 class="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 {!sidebar.isExpanded && !sidebar.isHovered ? 'lg:justify-center' : 'justify-start'}">
                                   {#if sidebar.isExpanded || sidebar.isHovered || sidebar.isMobileOpen}
                                        {section.title}
                                   {:else}
                                        <HorizontaLDots />
                                   {/if}
                              </h2>

                              <ul class="flex flex-col gap-4">
                                   {#each section.items as nav, index (nav.name)}
                                        {@const isThisOpen = openSubmenu?.type === section.type && openSubmenu?.index === index}
                                        {@const NavIcon = nav.icon}
                                        
                                        <li>
                                        {#if nav.subItems}
                                             <button
                                                  onclick={() => handleSubmenuToggle(index, section.type as "main" | "others")}
                                                  aria-expanded={isThisOpen}
                                                  class="menu-item group w-full {isThisOpen ? 'menu-item-active' : 'menu-item-inactive'} {!sidebar.isExpanded && !sidebar.isHovered ? 'lg:justify-center' : 'justify-start'}"
                                             >
                                                  <span class={isThisOpen ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}>
                                                       <NavIcon />
                                                  </span>
                                             
                                                  {#if sidebar.isExpanded || sidebar.isHovered || sidebar.isMobileOpen}
                                                       <span class="menu-item-text">{nav.name}</span>
                                                       <ChevronDownIcon class="ml-auto w-5 h-5 transition-transform duration-200 {isThisOpen ? 'rotate-180 text-brand-500' : ''}" />
                                                  {/if}
                                             </button>

                                             {#if sidebar.isExpanded || sidebar.isHovered || sidebar.isMobileOpen}
                                                  <div
                                                       bind:this={subMenuRefs[`${section.type}-${index}`]}
                                                       class="overflow-hidden transition-all duration-300"
                                                       style="height: {isThisOpen ? subMenuRefs[`${section.type}-${index}`]?.scrollHeight + 'px' : '0px'}"
                                                  >
                                                       <ul class="mt-2 space-y-1 ml-9">
                                                            {#each nav.subItems as subItem (subItem.path)}
                                                                 <li>
                                                                      <a
                                                                           href={subItem.path}
                                                                           class="menu-dropdown-item {isActive(subItem.path) ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}"
                                                                      >
                                                                           {subItem.name}
                                                                      </a>
                                                                 </li>
                                                            {/each}
                                                       </ul>
                                                  </div>
                                             {/if}
                                        {:else}
                                             <a
                                                  href={nav.path}
                                                  class="menu-item group {isActive(nav.path!) ? 'menu-item-active' : 'menu-item-inactive'} {!sidebar.isExpanded && !sidebar.isHovered ? 'lg:justify-center' : 'justify-start'}"
                                             >
                                                  <span class={isActive(nav.path!) ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}>
                                                       <NavIcon />
                                                  </span>
                                                  {#if sidebar.isExpanded || sidebar.isHovered || sidebar.isMobileOpen}
                                                       <span class="menu-item-text">{nav.name}</span>
                                                  {/if}
                                             </a>
                                        {/if}
                                        </li>
                                   {/each}
                              </ul>
                         </div>
                    {/each}
               </div>
          </nav>

          {#if sidebar.isExpanded || sidebar.isHovered || sidebar.isMobileOpen}
               <SidebarWidget />
          {/if}
     </div>
</aside>