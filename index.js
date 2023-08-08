const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const yearOutput = document.querySelector('#yearOutput');
const monthOutput = document.querySelector('#monthOutput');
const dayOutput = document.querySelector('#dayOutput');


function validateInput() {
    const dayInputValue = dayInput.value;
    const monthInputValue = monthInput.value;
    const yearInputValue = yearInput.value;
    let dayTrue = false;
    let monthTrue = false;
    let yearTrue = false;
    console.log('what')
    if(dayInputValue <= 0 || dayInputValue > 31) {
        setErrorFor(dayInput, "Must be a valid day" )
    }
    else {
        setSuccessFor(dayInput)
        dayTrue = true;
    }

    if(monthInputValue < 0 || monthInputValue > 12) {
        setErrorFor(monthInput, "Must be a valid month" )
        console.log("what?")
    }
    else {
        setSuccessFor(monthInput)
        monthTrue = true;
    }
    if(yearInputValue > 2023) {
        setErrorFor(yearInput, "Must be in the past" )
    }
    else {
        setSuccessFor(yearInput)
        yearTrue = true;
    }
    
    console.log(monthTrue)
    console.log(yearInputValue)
    if(yearInputValue == "" || monthInputValue == ""
        || dayInputValue == "") {
        
        yearOutput.innerHTML = "--"
        monthOutput.innerHTML = "--"
        dayOutput.innerHTML = "--"
    }
    else if(dayTrue && monthTrue && yearTrue
        ) {
        console.log("dito na")
        let birthday = `${yearInputValue}-${monthInputValue}-${dayInputValue}`
        console.log(birthday)
        let age = calculateAge(birthday);
        console.log(age)
        yearOutput.innerHTML = age[0]
        monthOutput.innerHTML = age[1]
        dayOutput.innerHTML = age[2]
    }
    
  }



  function setErrorFor(input, message) {
    const form = input.parentElement; //txtfield form control .form-control
    const small = form.querySelector('small');

    // add error message
    small.textContent = message;

    //add error class
    form.className = 'form error'
}

function setSuccessFor(input){
    const form = input.parentElement; //txtfield form control .form-control
    form.className = 'form'
}

function calculateAge(birthday) {
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    console.log(today.getDate())
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        console.log(today.getDate())
        age--;
        month += 12;
    }
    
    let day = today.getDate() - birthDate.getDate();
    console.log(new Date(today.getFullYear(), today.getMonth(), 0).getDate())
    if (day < 0) {
        month--;
        day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        console.log(day)
    }
    return [age, month, day];
}
