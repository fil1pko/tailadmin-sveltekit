<script lang="ts">
     import { onMount } from "svelte";
     import { Calendar } from "@fullcalendar/core";
     import dayGridPlugin from "@fullcalendar/daygrid";
     import timeGridPlugin from "@fullcalendar/timegrid";
     import interactionPlugin from "@fullcalendar/interaction";
     import type {
          EventInput,
          DateSelectArg,
          EventClickArg,
          EventContentArg,
     } from "@fullcalendar/core";
     import Modal from "$components/ui/modal/index.svelte";

     interface CalendarEvent extends EventInput {
          extendedProps: {
               calendar: string;
          };
     }

     // State pomocou Runes
     let isOpen = $state(false);
     let selectedEvent = $state<CalendarEvent | null>(null);
     let eventTitle = $state("");
     let eventStartDate = $state("");
     let eventEndDate = $state("");
     let eventLevel = $state("Primary");
     let events = $state<CalendarEvent[]>([
          {
               id: "1",
               title: "Event Conf.",
               start: new Date().toISOString().split("T")[0],
               extendedProps: { calendar: "Danger" },
          },
          {
               id: "2",
               title: "Meeting",
               start: new Date(Date.now() + 86400000).toISOString().split("T")[0],
               extendedProps: { calendar: "Success" },
          },
          {
               id: "3",
               title: "Workshop",
               start: new Date(Date.now() + 172800000).toISOString().split("T")[0],
               end: new Date(Date.now() + 259200000).toISOString().split("T")[0],
               extendedProps: { calendar: "Primary" },
          },
     ]);

     let calendarElement: HTMLElement;
     let calendarInstance: Calendar;

     const calendarsEvents = {
          Danger: "danger",
          Success: "success",
          Primary: "primary",
          Warning: "warning",
     };

     onMount(() => {
          calendarInstance = new Calendar(calendarElement, {
               plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
               initialView: "dayGridMonth",
               headerToolbar: {
                    left: "prev,next addEventButton",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
               },
               events: events,
               selectable: true,
               select: handleDateSelect,
               eventClick: handleEventClick,
               eventContent: renderEventContent,
               customButtons: {
                    addEventButton: {
                         text: "Add Event +",
                         click: () => {
                              resetModalFields();
                              isOpen = true;
                         },
                    },
               },
          });

          calendarInstance.render();

          return () => calendarInstance.destroy();
     });

     $effect(() => {
          if (calendarInstance && events) {
               calendarInstance.removeAllEvents();
               calendarInstance.addEventSource(events);
          }
     });

     function handleDateSelect(selectInfo: DateSelectArg) {
          resetModalFields();
          eventStartDate = selectInfo.startStr;
          eventEndDate = selectInfo.endStr || selectInfo.startStr;
          isOpen = true;
     }

     function handleEventClick(clickInfo: EventClickArg) {
          const event = clickInfo.event;
          selectedEvent = {
               id: event.id,
               title: event.title,
               start: event.startStr,
               end: event.endStr,
               extendedProps: { calendar: event.extendedProps.calendar },
          };
          eventTitle = event.title;
          eventStartDate = event.startStr;
          eventEndDate = event.endStr || event.startStr;
          eventLevel = event.extendedProps.calendar;
          isOpen = true;
     }

     function handleAddOrUpdateEvent() {
          if (selectedEvent) {
               events = events.map((ev) =>
                    ev.id === selectedEvent?.id
                         ? {
                                ...ev,
                                title: eventTitle,
                                start: eventStartDate,
                                end: eventEndDate,
                                extendedProps: { calendar: eventLevel },
                           }
                         : ev
               );
          } else {
               const newEvent: CalendarEvent = {
                    id: Date.now().toString(),
                    title: eventTitle,
                    start: eventStartDate,
                    end: eventEndDate,
                    allDay: true,
                    extendedProps: { calendar: eventLevel },
               };
               events = [...events, newEvent];
          }
          isOpen = false;
          resetModalFields();
     }

     function resetModalFields() {
          eventTitle = "";
          eventStartDate = "";
          eventEndDate = "";
          eventLevel = "Primary";
          selectedEvent = null;
     }

     function renderEventContent(eventInfo: EventContentArg) {
          const calendarValue = eventInfo.event.extendedProps.calendar || "Primary";
          const colorClass = `fc-bg-${calendarValue.toLowerCase()}`;

          return {
               html: `
               <div class="event-fc-color flex fc-event-main ${colorClass} p-1 rounded-sm w-full">
                    <div class="fc-daygrid-event-dot"></div>
                    <div class="fc-event-time">${eventInfo.timeText}</div>
                    <div class="fc-event-title">${eventInfo.event.title}</div>
               </div>
          `,
          };
     }
</script>

<div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
     <div class="custom-calendar">
          <div bind:this={calendarElement}></div>
     </div>

     <Modal {isOpen} onClose={() => (isOpen = false)} className="max-w-[700px] p-6 lg:p-10">
          <div class="flex flex-col px-2 overflow-y-auto custom-scrollbar">
               <div>
                    <h5 class="mb-2 font-semibold text-gray-800 text-theme-xl dark:text-white/90 lg:text-2xl">
                         {selectedEvent ? "Edit Event" : "Add Event"}
                    </h5>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                         Plan your next big moment: schedule or edit an event to stay on track
                    </p>
               </div>

               <div class="mt-8 space-y-6">
                    <div>
                         <label for="event-title-input" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                              Event Title
                         </label>
                         <input
                              id="event-title-input"
                              type="text"
                              bind:value={eventTitle}
                              class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:text-white/90"
                              placeholder="Enter event title"
                         />
                    </div>

                    <div>
                         <span class="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-400">
                              Event Color
                         </span>
                         <div class="flex flex-wrap items-center gap-4 sm:gap-5">
                              {#each Object.entries(calendarsEvents) as [key] (key)}
                                   <label class="flex items-center text-sm text-gray-700 cursor-pointer dark:text-gray-400">
                                        <div class="relative flex items-center">
                                             <input
                                                  type="radio"
                                                  name="event-level"
                                                  class="sr-only"
                                                  value={key}
                                                  checked={eventLevel === key}
                                                  onchange={() => (eventLevel = key)}
                                             />
                                             <span
                                                  class="flex items-center justify-center w-5 h-5 mr-2 border border-gray-300 rounded-full dark:border-gray-700"
                                             >
                                                  {#if eventLevel === key}
                                                       <span class="h-2 w-2 rounded-full bg-brand-500"></span>
                                                  {/if}
                                             </span>
                                        </div>
                                        {key}
                                   </label>
                              {/each}
                         </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                         <div>
                              <label for="start-date-input" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                   Start Date
                              </label>
                              <input
                                   id="start-date-input"
                                   type="date"
                                   bind:value={eventStartDate}
                                   class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm dark:border-gray-700 dark:text-white"
                              />
                         </div>
                         <div>
                              <label for="end-date-input" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                   End Date
                              </label>
                              <input
                                   id="end-date-input"
                                   type="date"
                                   bind:value={eventEndDate}
                                   class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm dark:border-gray-700 dark:text-white"
                              />
                         </div>
                    </div>
               </div>

               <div class="flex items-center gap-3 mt-8 sm:justify-end">
                    <button
                         type="button"
                         onclick={() => (isOpen = false)}
                         class="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
                    >
                         Close
                    </button>
                    <button
                         type="button"
                         onclick={handleAddOrUpdateEvent}
                         class="flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                    >
                         {selectedEvent ? "Update Changes" : "Add Event"}
                    </button>
               </div>
          </div>
     </Modal>
</div>

<style>
     :global(.fc) {
          --fc-border-color: #e5e7eb;
          --fc-button-bg-color: #4f46e5;
          --fc-button-border-color: #4f46e5;
          --fc-button-hover-bg-color: #4338ca;
     }
     :global(.dark .fc) {
          --fc-border-color: #1f2937;
     }
</style>