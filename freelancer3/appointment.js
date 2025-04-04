document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");
    const currentMonth = document.getElementById("currentMonth");
    const timeSelect = document.getElementById("time");
    const bookButton = document.getElementById("bookButton");

    let selectedDate = null;
    let date = new Date(2025, 0, 1);
    const today = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    let bookedAppointments = JSON.parse(localStorage.getItem("bookedAppointments")) || {};

    function saveAppointments() {
        localStorage.setItem("bookedAppointments", JSON.stringify(bookedAppointments));
    }

    function generateTimeSlots() {
        timeSelect.innerHTML = "";
        for (let hour = 8; hour <= 22; hour++) {
            let time = hour < 12 ? `${hour}:00 AM` : (hour === 12 ? `12:00 PM` : `${hour - 12}:00 PM`);
            let option = document.createElement("option");
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        }
    }

    function updateCalendar() {
        calendar.innerHTML = "";
        currentMonth.textContent = `${months[date.getMonth()]}, ${date.getFullYear()}`;
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            let emptyDiv = document.createElement("div");
            calendar.appendChild(emptyDiv);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            let dayElement = document.createElement("div");
            dayElement.textContent = `${i}`;
            let dateKey = `${date.getFullYear()}-${date.getMonth()}-${i}`;
            let selectedFullDate = new Date(date.getFullYear(), date.getMonth(), i);

            if (selectedFullDate < today) {
                dayElement.classList.add("past");
            } else if (bookedAppointments[dateKey]) {
                dayElement.classList.add("booked");
            } else {
                dayElement.addEventListener("click", function () {
                    if (selectedDate) {
                        selectedDate.classList.remove("selected");
                    }
                    dayElement.classList.add("selected");
                    selectedDate = dayElement;
                    generateTimeSlots();
                });
            }
            calendar.appendChild(dayElement);
        }
    }

    bookButton.addEventListener("click", function () {
        if (selectedDate) {
            let chosenDay = selectedDate.textContent;
            let chosenMonth = date.getMonth();
            let chosenYear = date.getFullYear();
            let selectedTime = timeSelect.value;
            let dateKey = `${chosenYear}-${chosenMonth}-${chosenDay}`;

            if (!bookedAppointments[dateKey]) {
                bookedAppointments[dateKey] = [];
            }

            if (!bookedAppointments[dateKey].includes(selectedTime)) {
                bookedAppointments[dateKey].push(selectedTime);
                selectedDate.classList.add("booked");
                saveAppointments();
                alert(`Appointment booked for ${chosenDay} ${months[chosenMonth]} ${chosenYear} at ${selectedTime}`);
                
                // Redirect to details.html
                window.location.href = "../freelancer2/details.html";

            } else {
                alert("This time slot is already booked.");
            }
        } else {
            alert("Please select a date before booking.");
        }
    });

    prevMonthBtn.addEventListener("click", function () {
        date.setMonth(date.getMonth() - 1);
        updateCalendar();
    });

    nextMonthBtn.addEventListener("click", function () {
        date.setMonth(date.getMonth() + 1);
        updateCalendar();
    });

    updateCalendar();
});
