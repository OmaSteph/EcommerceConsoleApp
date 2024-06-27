
// function

function calculateBmi() {
let weight = document.getElementById('weight').value
let height = document.getElementById('height').value

let bmi = (weight / (height * height))
//var calculateButton = document.querySelector(".calculate");
//var result = document.querySelector(".result");
//var statement = document.querySelector(".result-statement");
//var BMI, height, weight;

//calculateButton.addEventListener("click", ()=>{

    //height = heightInput.value;
    //weight = weightInput.value;
    //bmi = weight/(height*height);
    //result.innerText = bmi;

    //console.log(bmi)

    document.getElementById('heading').innerHTML = 'Your BMI is:'
    document.getElementById('result').innerHTML = bmi

   if (bmi < 18.5) {
    document.getElementById('status').innerHTML = "You are underweight"
    } else if (bmi > 18.5 && bmi < 24.9) {
        document.getElementById('status').innerHTML = "You are healthy"
    }else {
    document.getElementById('status').innerHTML = "You are overweight"
    }

}




