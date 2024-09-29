var ageCalculatorApp = {
    // State to store user-selected date and today's date
    birthDate: null,
    todayDate: new Date(),

    // DOM Elements
    dateInputEl: document.getElementById('date-input'),
    datePickerEl: document.getElementById('date-picker'),
    yearsEl: document.getElementById('years'),
    monthsEl: document.getElementById('months'),
    daysEl: document.getElementById('days'),
    calculateBtnEl: document.getElementById('calculate-btn'),
    calendarBtnEl: document.getElementById('calendar-btn'),

    // Method to initialize event listeners
    init() {
        this.addEventListeners();
    },

    // Add event listeners for buttons
    addEventListeners() {
        // Show date picker when calendar icon is clicked
        this.calendarBtnEl.addEventListener('click', () => {
            this.showCalendar();
        });

        // Update input field when a date is selected
        this.datePickerEl.addEventListener('change', (e) => {
            this.handleDateSelection(e);
        });

        // Calculate age when the calculate button is clicked
        this.calculateBtnEl.addEventListener('click', () => {
            this.calculateAge();
        });
    },

    // Show the hidden date picker
    showCalendar() {
        this.datePickerEl.style.display = 'block'; // Ensure it's visible
        this.datePickerEl.focus();  // Set focus to the date picker so it opens
        this.datePickerEl.click();  // Trigger the date picker
    },

    // Handle date selection from the calendar
    handleDateSelection(event) {
        var selectedDate = new Date(event.target.value);
        if (!isNaN(selectedDate)) {
            this.birthDate = selectedDate;
            this.dateInputEl.value = selectedDate.toLocaleDateString('en-GB'); // Format as DD-MM-YYYY
        }
    },

    // Calculate age based on birth date and today's date
    calculateAge() {
        if (!this.birthDate) {
            alert("Please select a valid birth date.");
            return;
        }

        var today = this.todayDate;
        var ageYears = today.getFullYear() - this.birthDate.getFullYear();
        var ageMonths = today.getMonth() - this.birthDate.getMonth();
        var ageDays = today.getDate() - this.birthDate.getDate();

        // Adjust for negative values
        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        // Update the DOM with the calculated age
        this.updateDOM(ageYears, ageMonths, ageDays);
    },

    // Update the result boxes in the DOM with the calculated age
    updateDOM(years, months, days) {
        this.yearsEl.innerText = years;
        this.monthsEl.innerText = months;
        this.daysEl.innerText = days;
    }
};

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    ageCalculatorApp.init();
});
