<script lang="ts">
     import { onMount } from 'svelte';
     import { Calendar } from '@fullcalendar/core';
     import dayGridPlugin from '@fullcalendar/daygrid';
     import timeGridPlugin from '@fullcalendar/timegrid';
     import interactionPlugin from '@fullcalendar/interaction';
     import type { 
          EventInput, 
          DateSelectArg, 
          EventClickArg, 
          EventContentArg 
     } from '@fullcalendar/core';
     import  Modal  from "$components/ui/modal/index.svelte";

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
     let eventLevel = $state("");
     let events = $state<CalendarEvent[]>([]);
     
     let calendarElement: HTMLElement;
     let calendarInstance: Calendar;

     const calendarsEvents = {
          Danger: "danger",
          Success: "success",
          Primary: "primary",
          Warning: "warning",
     };

     onMount(() => {
          events = [
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
          ];

          calendarInstance = new Calendar(calendarElement, {
               plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
               initialView: "dayGridMonth",
               headerToolbar: {
                    left: "prev,next addEventButton",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
               },
               events: () => events, 
               selectable: true,
               select: handleDateSelect,
               eventClick: handleEventClick,
               eventContent: renderEventContent,
               customButtons: {
                    addEventButton: {
                         text: "Add Event +",
                         click: () => { isOpen = true; resetModalFields(); },
                    },
               },
          });

          calendarInstance.render();
     });

     $effect(() => {
          if (events && calendarInstance) {
               calendarInstance.refetchEvents();
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
               extendedProps: { calendar: event.extendedProps.calendar }
          };
          eventTitle = event.title;
          eventStartDate = event.start?.toISOString().split("T")[0] || "";
          eventEndDate = event.end?.toISOString().split("T")[0] || "";
          eventLevel = event.extendedProps.calendar;
          isOpen = true;
     }

     function handleAddOrUpdateEvent() {
          if (selectedEvent) {
               events = events.map((event) =>
                    event.id === selectedEvent?.id
                         ? {
                                ...event,
                                title: eventTitle,
                                start: eventStartDate,
                                end: eventEndDate,
                                extendedProps: { calendar: eventLevel },
                           }
                         : event
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
          eventLevel = "";
          selectedEvent = null;
     }

     function renderEventContent(eventInfo: EventContentArg) {
          const calendarValue = eventInfo.event.extendedProps.calendar;
          const colorClass = `fc-bg-${calendarValue ? calendarValue.toLowerCase() : 'primary'}`;
          
          let container = document.createElement('div');
          container.className = `event-fc-color flex fc-event-main ${colorClass} p-1 rounded-sm`;
          container.innerHTML = `
               <div class="fc-daygrid-event-dot"></div>
               <div class="fc-event-time">${eventInfo.timeText}</div>
               <div class="fc-event-title">${eventInfo.event.title}</div>
          `;
          return { domNodes: [container] };
     }
</script>

<div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
     <div class="custom-calendar">
          <div bind:this={calendarElement}></div>
     </div>

     <Modal
          {isOpen}
          onClose={() => (isOpen = false)}
          className="max-w-[700px] p-6 lg:p-10"
     >
          <div class="flex flex-col px-2 overflow-y-auto custom-scrollbar">
               <div>
                    <h5 class="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
                         {selectedEvent ? "Edit Event" : "Add Event"}
                    </h5>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                         Plan your next big moment: schedule or edit an event to stay on track
                    </p>
               </div>
               <div class="mt-8">
                    <div>
                         <div>
                              <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                   Event Title
                              </label>
                              <input
                                   id="event-title"
                                   type="text"
                                   bind:value={eventTitle}
                                   class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                              />
                         </div>
                    </div>
                    <div class="mt-6">
                         <label class="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-400">
                              Event Color
                         </label>
                         <div class="flex flex-wrap items-center gap-4 sm:gap-5">
                              {#each Object.entries(calendarsEvents) as [key, value]}
                                   <div class="n-chk">
                                        <div class="form-check form-check-{value} form-check-inline">
                                             <label
                                                  class="flex items-center text-sm text-gray-700 form-check-label dark:text-gray-400"
                                                  for="modal{key}"
                                             >
                                                  <span class="relative">
                                                       <input
                                                            class="sr-only form-check-input"
                                                            type="radio"
                                                            name="event-level"
                                                            value={key}
                                                            id="modal{key}"
                                                            checked={eventLevel === key}
                                                            onchange={() => (eventLevel = key)}
                                                       />
                                                       <span class="flex items-center justify-center w-5 h-5 mr-2 border border-gray-300 rounded-full box dark:border-gray-700">
                                                            <span
                                                                 class="h-2 w-2 rounded-full bg-white {eventLevel === key ? 'block' : 'hidden'}"
                                                            ></span>
                                                       </span>
                                                  </span>
                                                  {key}
                                             </label>
                                        </div>
                                   </div>
                              {/each}
                         </div>
                    </div>

                    <div class="mt-6">
                         <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                              Enter Start Date
                         </label>
                         <div class="relative">
                              <input
                                   id="event-start-date"
                                   type="date"
                                   bind:value={eventStartDate}
                                   class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                              />
                         </div>
                    </div>

                    <div class="mt-6">
                         <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                              Enter End Date
                         </label>
                         <div class="relative">
                              <input
                                   id="event-end-date"
                                   type="date"
                                   bind:value={eventEndDate}
                                   class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                              />
                         </div>
                    </div>
               </div>
               <div class="flex items-center gap-3 mt-6 modal-footer sm:justify-end">
                    <button
                         onclick={() => (isOpen = false)}
                         type="button"
                         class="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
                    >
                         Close
                    </button>
                    <button
                         onclick={handleAddOrUpdateEvent}
                         type="button"
                         class="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                    >
                         {selectedEvent ? "Update Changes" : "Add Event"}
                    </button>
               </div>
          </div>
     </Modal>
</div>

<style>
     :global(.fc) {
          @apply font-sans;
     }
</style>