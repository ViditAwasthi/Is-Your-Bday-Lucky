const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const resultDiv = document.querySelector("#result-div");
const closeButton = document.querySelector(".close-btn");
const alertDiv = document.querySelector("#alert-div");


function checkBirthDateLucky() {
    if (birthDate.value && luckyNumber.value) {
        const dateOfBirth = birthDate.value;
        const sum = calculateSum(dateOfBirth);
        compareBirthdate(sum, luckyNumber.value);
    } else {
        resultDiv.innerText = "Please Enter the Values to Check!😊"
    }

}

function calculateSum(dateOfBirth) {
    dateOfBirth = dateOfBirth.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dateOfBirth.length; i++) {
        sum = sum + Number(dateOfBirth.charAt(i))
    }
    return sum;
}

function compareBirthdate(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        resultDiv.innerText = "Congrats! Your Birthdate is Lucky🥳"

    } else {
        resultDiv.innerText = "Oh! Your Birthdate is Not Lucky☹️"

    }

}

function closeAlertDiv() {
    alertDiv.style.display = "none"
}

checkButton.addEventListener("click", checkBirthDateLucky)
closeButton.addEventListener("click", closeAlertDiv)