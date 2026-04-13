<script lang="ts">
     import { Table, TableBody, TableCell, TableHeader, TableRow, } from "$components/ui/table";
     import Badge from "$components/ui/badge/Badge.svelte";

     interface Order {
          id: number;
          user: {
               image: string;
               name: string;
               role: string;
          };
          projectName: string;
          team: {
               images: string[];
          };
          status: string;
          budget: string;
     }

     const tableData: Order[] = [
          {
               id: 1,
               user: {
                    image: "/images/user/user-17.jpg",
                    name: "Lindsey Curtis",
                    role: "Web Designer",
               },
               projectName: "Agency Website",
               team: {
                    images: ["/images/user/user-22.jpg", "/images/user/user-23.jpg", "/images/user/user-24.jpg"],
               },
               budget: "3.9K",
               status: "Active",
          },
          {
               id: 2,
               user: {
                    image: "/images/user/user-18.jpg",
                    name: "Kaiya George",
                    role: "Project Manager",
               },
               projectName: "Technology",
               team: {
                    images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
               },
               budget: "24.9K",
               status: "Pending",
          },
          {
               id: 3,
               user: {
                    image: "/images/user/user-17.jpg",
                    name: "Zain Geidt",
                    role: "Content Writing",
               },
               projectName: "Blog Writing",
               team: {
                    images: ["/images/user/user-27.jpg"],
               },
               budget: "12.7K",
               status: "Active",
          },
          {
               id: 4,
               user: {
                    image: "/images/user/user-20.jpg",
                    name: "Abram Schleifer",
                    role: "Digital Marketer",
               },
               projectName: "Social Media",
               team: {
                    images: ["/images/user/user-28.jpg", "/images/user/user-29.jpg", "/images/user/user-30.jpg"],
               },
               budget: "2.8K",
               status: "Cancel",
          },
          {
               id: 5,
               user: {
                    image: "/images/user/user-21.jpg",
                    name: "Carla George",
                    role: "Front-end Developer",
               },
               projectName: "Website",
               team: {
                    images: ["/images/user/user-31.jpg", "/images/user/user-32.jpg", "/images/user/user-33.jpg"],
               },
               budget: "4.5K",
               status: "Active",
          },
     ];

     const getBadgeColor = (status: string) => {
          if (status === "Active") return "success";
          if (status === "Pending") return "warning";
          return "error";
     };
</script>

<div class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
     <div class="max-w-full overflow-x-auto">
          <div class="min-w-[1102px]">
               <Table>
                    <TableHeader class="border-b border-gray-100 dark:border-white/[0.05]">
                         <TableRow>
                         {#each ["User", "Project Name", "Team", "Status", "Budget"] as header (header)}
                              <TableCell
                                   isHeader
                                   class="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                              >
                                   {header}
                              </TableCell>
                         {/each}
                         </TableRow>
                    </TableHeader>

                    <TableBody class="divide-y divide-gray-100 dark:divide-white/[0.05]">
                         {#each tableData as order (order.id)}
                         <TableRow>
                         <TableCell class="px-5 py-4 sm:px-6 text-start">
                              <div class="flex items-center gap-3">
                                   <div class="w-10 h-10 overflow-hidden rounded-full">
                                        <img
                                             width="40"
                                             height="40"
                                             src={order.user.image}
                                             alt={order.user.name}
                                        />
                                   </div>
                                   <div>
                                        <span class="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                             {order.user.name}
                                        </span>
                                        <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
                                             {order.user.role}
                                        </span>
                                   </div>
                              </div>
                         </TableCell>

                         <TableCell class="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                              {order.projectName}
                         </TableCell>

                         <TableCell class="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                              <div class="flex -space-x-2">
                                   {#each order.team.images as teamImage (teamImage)}
                                        <div class="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                                             <img
                                                  width="24"
                                                  height="24"
                                                  src={teamImage}
                                                  alt="Team member"
                                                  class="w-full h-full object-cover"
                                             />
                                        </div>
                                   {/each}
                              </div>
                         </TableCell>

                         <TableCell class="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                              <Badge size="sm" color={getBadgeColor(order.status)}>
                              {order.status}
                              </Badge>
                         </TableCell>

                         <TableCell class="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                              {order.budget}
                         </TableCell>
                         </TableRow>
                         {/each}
                    </TableBody>
               </Table>
          </div>
     </div>
</div>