const numberString = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

convertBtn.addEventListener('click', () => {
    let number = parseInt(numberString.value);

    if (numberString.value === "") {
        return output.textContent = `Please enter a valid number`;
    } else if (number < 1) {
        return output.textContent = `Please enter a number greater than or equal to 1`;
    } else if (number >= 4000) {
        return output.textContent = `Please enter a number less than or equal to 3999.`;
    }
    
    output.textContent = "";
    let result = "";

    for (let prop in romanNumerals) {
        while (number >= romanNumerals[prop]) {
            result += prop;
            number -= romanNumerals[prop];
        }   
    }

    output.textContent = `= ${result}`;
})
