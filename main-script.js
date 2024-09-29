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









    showCalendar(){
        this.dataPickerEl.style.display = 'block';
        this.dataPickerEl.focus();
        this.dataPickerEl.click();
    },

    handleDataSelection(event){
        var selectedDate = new Date(event.target.value);
        if(!isNaN(selectedDate)){
            this.birthDate = selectedDate;
            this.dataInputEl.value = selectedDate.toLocaleDateString('en-GB');
        }
    },



    calculatAge(){
        if (!this.birthDate){
            alert("Please select a valid birth date.");
            return;
        }

        var today = this.todayDate;
        var ageYears = today.getFullYear() - this.birthDate.getFullYear();
        var ageMonths = today.getMonth() - this.birthDate.getMonth();
        var ageDays = today.getDate() - this.birthDate.getDate();

        
        if(ageDays < 0){
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if(ageMonths < 0){
            ageYears--;
            ageMonths += 12;
        }
        this.updateDom(ageYears, ageMonths, ageDays);
    },
}