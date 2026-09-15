import { Calendar } from "fullcalendar";
import themePlugin from "fullcalendar/themes/monarch";
import dayGridPlugin from "fullcalendar/daygrid";

// stylesheets
import 'fullcalendar/skeleton.css'; // 必須
import 'fullcalendar/themes/monarch/theme.css'; // テーマ (theme)
import 'fullcalendar/themes/monarch/palettes/purple.css'; // テーマパレット (theme's palette)

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl: HTMLElement = document.getElementById("calendar")!;

  const calendar = new Calendar(calendarEl, {
    plugins: [themePlugin, dayGridPlugin],
    // options here
  });

  calendar.render();
});
