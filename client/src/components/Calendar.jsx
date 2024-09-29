import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // a plugin
import { forwardRef, useRef } from "react";

/** Full Calendar is the first solution for the calendar.
 * Another secondary option is @ https://calendar-react.com/
 * more info and docs @ https://fullcalendar.io/docs/react
 */

export const Calendar = forwardRef(function Calendar(props, ref) {
  const PreviousCalendar = useRef(null);
  const FutureCalendar = useRef(null);

  return (
    <div className="snap-mandatory snap-x grid grid-cols-3 align-middle gap-8 h-full min-w-[1465px] lg:min-w-0">
      <div className="snap-center hover:snap-x touch-pan-x shrink-0 snap-always md:flex justify-center items-center bg-[--global-color-dark-light-bg] rounded-md p-2 hidden">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          headerToolbar={{
            left: "",
            center: "title",
            right: "dayGridMonth, timeGridYear, timeGridDay",
          }}
          ref={PreviousCalendar}
        />
      </div>
      {/* Mobile Middle Calendar */}
      <div className="snap-center hover:snap-x touch-pan-x shrink-0 snap-always flex justify-center items-center bg-[--global-color-dark-accent] rounded-md p-2 md:hidden">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          weekends={false}
          ref={ref}
          headerToolbar={{
            left: "",
            center: "title",
            right: "dayGridMonth, timeGridYear, timeGridDay",
          }}
        />
      </div>
      {/* Desktop/Laptop Middle Calendar */}
      <div className="snap-center hover:snap-x touch-pan-x shrink-0 snap-always md:flex justify-center items-center bg-[--global-color-dark-accent] rounded-md p-2 hidden">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          ref={ref}
          headerToolbar={{
            left: "today",
            center: "title",
            right: "dayGridYear, timeGridWeek, timeGridDay",
          }}
          events={props}
        />
      </div>
      <div className="snap-center hover:snap-x touch-pan-x shrink-0 snap-always md:flex justify-center items-center bg-[--global-color-dark-light-bg] rounded-md p-2 hidden">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          headerToolbar={{
            left: "",
            center: "title",
            right: "",
          }}
          ref={FutureCalendar}
        />
      </div>
    </div>
  );
});
