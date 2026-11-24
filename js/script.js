
document.addEventListener("DOMContentLoaded", function () 
{
    const calendarView = document.getElementById("calendar");
    const calendar = new FullCalendar.Calendar(calendarView, 
    {
        initialView: "dayGridWeek",
        nowIndicator: true,
        headerToolbar: 
        {
            center: 'title',
        },
        editable: true,
        selectable: true,
        selectMirror: true,
    });
        
        calendar.render();
});
