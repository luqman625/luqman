const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset(){
    bmiText.textContent = 0;
    bmiText.className = "";
    descText.textContent = "N/A";
}

function onFormSubmit(e){
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        alert("Please enter a valid weight and height.")
        return;
    }

    const heightInMeter = height / 100;
    const bmi = weight / Math.pow(heightInMeter,2);
    const desc = interpretBMI(bmi);

    bmiText.textContent = bmi.toFixed(2);
    bmiText.className = desc;
    descText.innerHTML = `You are <strong>${desc}</strong>`;

}

function interpretBMI(bmi){
    if( bmi < 18.5){
        return "Underweight";
    }
    else if ( bmi < 25){
        return "Healthy";
    }
    else if ( bmi < 30){
        return "Overweight";
    }
    else {
        return "Obese";
    }
}