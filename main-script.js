var ageCalculatorApp = {
    birthDate: null,
    todayDate: new Date(),

    dataInputEl: document.getElementById('dataInput'),
    dataPickerEl: document.getElementById('dataPicker'),
    yearsEl: document.getElementById('years'),
    monthsEl: document.getElementById('months'),
    daysEl: document.getElementById('days'),
    calculateBtnEl: document.getElementById('calculateBtn'),
    calenderBtnEl: document.getElementById('calenderBtn'),

    // Method to initialize event listeners
    init() {
        this.addEventListeners();
    },

    addEventListener(){
        this.calculateBtnEl.addEventListener('click',() =>{
            this.showCalendar();
        });
        this.dataPickerEl.addEventListener('click',(e) =>{
            this.handleDataSelection(e);
        });
        
        this.calculateBtnEl.addEventListener('click', () => {
            this.calculatAge();
        })
    },   
}